import User from "@/models/adminModel";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";

async function getUser(email, password) {
  try {
    await connect(); // Connect to the database
    const user = await User.findOne({ email });
    if (!user) {
      return { status: 401, error: "User not found" }; // or return null, or throw a custom error
    } else {
      const isValid = await bcrypt.compare(password, user.password); // compare the provided password with the stored hashed password
      if (!isValid) {
        // if the passwords don't match
        return { status: 401, error: "Invalid password" }; // or return null, or throw a custom error
      } else {
        // if the passwords match
        return user; // return the user object
      }
    }
  } catch (error) {
    // Handle different error types gracefully
    if (error.message === "User not found") {
      return { error: "User not found" }; // Return a clear user-friendly object
    } else if (error.message === "Invalid password") {
      return { error: "Invalid password" }; // Return a clear user-friendly object
    } else {
      // Handle unexpected errors (log or return a generic message)
      console.error("Unexpected error:", error);
      return { error: "Failed to fetch user" }; // Generic error for client
    }
  }
}

export const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Custom Sign In",
      credentials: {},
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null; // Return null if credentials are invalid
        }
        const { email, password } = credentials;
        try {
          const response = await getUser(email, password);
          if (!response.isAdmin) {
            // Return an object with the user's information
            return response;
          }
          return {
            id: response.id,
            name: response.username,
            email: response.email,
            isAdmin: response.isAdmin,
          }; // Return an object with the user's information
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // jwt: true,
  },
  callbacks: {
    async signIn({ user }) {
      if (user?.error) {
        throw new Error(user?.error);
      }
      return true;
    }, // Return true to redirect to the protected route
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name; // Add the user's name to the token
        token.email = user.email;
        // add isAdmin
        token.isAdmin = user.isAdmin; // Add the user's isAdmin to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.id = token.id;
      session.user.name = token.name; // Add the user's name to the session
      session.user.isAdmin = token.isAdmin; // Add the user's isAdmin to the session
      session.user.email = token.email;
      return session;
    },
  },
  pages: {
    signIn: "/Admin/Chcek",
  },
};
