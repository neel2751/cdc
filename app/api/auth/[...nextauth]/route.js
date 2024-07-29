// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials, req) => {
//         // Extract credentials from req.body
//         const { username, password } = credentials;

//         // Validate credentials (this is where you'd connect to your database)
//         const db = await connectToDatabase();
//         const User = db.model("User");

//         const user = await User.findOne({ username });

//         if (user && user.verifyPassword(password)) {
//           return Promise.resolve(user);
//         } else {
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     async session(session, user) {
//       session.user.id = user.id;
//       return Promise.resolve(session);
//     },
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//       }
//       return Promise.resolve(token);
//     },
//   },
//   pages: {
//     signIn: "/admin/(authPage)/Check",
//   },
// });

import { AuthLogin } from "@/actions/loginAction";
import User from "@/models/adminModel";
import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcryptjs";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "Custom Sign In",
//       credentials: {},

//       async authorize(credentials) {
//         // console.log("authorizing with credentials ", credentials);
//         // const url = new URL(credentials.callbackUrl);
//         // const extractedValue = url.origin; // https://cdc-7v3vy0apq-neels-projects-d15d610d.vercel.app

//         // console.log("this is the main url", extractedValue);

//         // from credentials extract the data

//         try {
//           const { email, password } = credentials;
//           const dataResponse = await AuthLogin(email, password);
//           // console.log("this is next auth data is here...", dataResponse);
//           console.log(dataResponse);
//           return null;
//           if (
//             dataResponse?.status === 200 &&
//             dataResponse?.data?.isAdmin === true
//           ) {
//             console.log(dataResponse);
//             return null;
//             const user = {
//               id: dataResponse?.data?.id,
//               name: dataResponse?.data?.name,
//               email: dataResponse?.data?.email,
//               image: "",
//             };
//             return user;
//           } else {
//             return null;
//             throw new Error("Invalid User");
//           }
//           // if (dataResponse.status === 200 && dataResponse.data.isAdmin === true)
//           // return dataResponse.data;
//           // if (dataResponse.data.isAdmin === true) {
//           //   const check = dataResponse.data;
//           //   const user = {
//           //     id: check.id,
//           //     email: check.email,
//           //     name: check.name,
//           //     isAdmin: check.isAdmin,
//           //   };
//           //   return user;
//           // } else {
//           //   console.log("else error from nextauth login", dataResponse);
//           //   return null;
//           // }
//           //   return response.data.data;
//         } catch (error) {
//           console.log("Error: ", error);
//           // throw new Error("Incorrect username or password");
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//     // jwt: true,
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user.email = token.email;
//       session.user.name = token.name;
//       session.user.id = token.sub;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user._id;
//         (token.name = user.name), (token.email = user.email);
//       }
//       return token;
//     },
//     // async session(session, user) {
//     //   console.log("session the user data->", session);
//     //   session.user.name = user.id;
//     //   return Promise.resolve(session);
//     // },
//     // async jwt(token, user) {
//     //   if (user) {
//     //     token.id = user.id || null; // Assign user.id to token.id if it exists, otherwise, set it to null
//     //   }
//     //   return token;
//     // },
//     // async jwt(token, user) {
//     //   if (user) {
//     //     token.id = user.id;
//     //   }
//     //   return Promise.resolve(token);
//     // },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/Admin/Chcek",
//   },
// };

async function getUser(email, password) {
  try {
    await connect();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found"); // or return null, or throw a custom error
    } else {
      const isValid = await bcrypt.compare(password, user.password); // compare the provided password with the stored hashed password
      if (!isValid) {
        // if the passwords don't match
        throw new Error("Invalid password"); // or return null, or throw a custom error
      } else {
        // if the passwords match
        return user; // return the user object
      }
    }
  } catch (error) {
    console.error(error); // log the error
    throw new Error("Failed to Fetch  User"); // or return null, or throw a custom error
    return null; // return null to indicate that the user was not found or the password was invalid
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credential) {
        // this function is called when the user submits the login form
        const user = await getUser(credential.email, credential.password);
        if (!user) {
          // if the user is not found or the password is invalid
          throw new Error("Invalid credentials"); // or return null, or throw a custom error
        } else {
          // if the user is found and the password is valid
          return user; // return the user object
        } // end of if
      },
    }),
  ],
  pages: { signIn: "/Admin/Check" }, // redirect to this page after login
  // callbacks: {
  //   authorized(permissions, user) {
  //     // Check if the user has the required permissions
  //     return permissions.includes(user.role); // if user has the required permissions, return true
  //   }, // redirect to this page if the user is not authorized
  //   providers: [
  //     CredentialsProvider({
  //       name: "credentials",
  //       async authorize(credentials) {
  //         console.log(credentials);
  //         // credentials is the data from the form
  //         const user = await getUser(credentials.email, credentials.password); // call the getUser function to get the user
  //         if (user) {
  //           // if the user exists
  //           return { id: user.id, email: user.email, role: user.role }; // return the user data
  //         } else {
  //           // if the user does not exist
  //           throw new Error("Invalid credentials"); // or return null, or throw a custom error
  //         } // if the user exists, return the user data
  //       },
  //     }),
  //   ],
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// export default handler;
