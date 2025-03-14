"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { addHours } from "date-fns"; // For setting the expiration time (optional, you can use other methods)

// Assuming your session needs an 'expiresAt' field (for example, 1 hour from now)
export async function loginUser(email: string, password: string) {
  try {
    // Fetch the user from the database using the email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user || !user.password) {
      // If user is not found or the password is null/undefined, return error
      return { error: "Invalid credentials" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password || "");

    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }

    // Check if a session already exists for this user
    const existingSession = await prisma.session.findUnique({
      where: { userId: user.id },
    });

    if (existingSession) {
      // If a session already exists, return it without creating a new one
      return { success: true, session: existingSession };
    }

    // Create a new session if one doesn't exist
    const session = await prisma.session.create({
      data: {
        userId: user.id, // User ID for the session
        expiresAt: addHours(new Date(), 1), // Set the session expiration time (e.g., 1 hour from now)
        // Add any other session properties that your schema requires
      },
    });

    return { success: true, session };
  } catch (error) {
    console.error("Error logging in user:", error);
    return { error: "Something went wrong" };
  }
}
