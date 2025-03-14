"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function signUpUser(formData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  try {
    // Check if a user with the same email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: formData.email, // Check by email only
      },
    });

    if (existingUser) {
      // If the user already exists, return an error
      return { error: "Email already exists. Please use a different one." };
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: hashedPassword,
      },
    });

    console.log("User Created:", newUser); // Log the new user for debugging

    return { success: true };
  } catch (err) {
    console.error("Signup Error:", err);
    return { error: "Something went wrong. Please try again." };
  }
}
