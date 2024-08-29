"use server";

import { signIn } from "next-auth/react";

export const AuthLogin = async (formData) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Something  went wrong";
      }
    }
    throw error;
  }
};
