"use server";

import { lucia } from "@/lib/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Lucia } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser(email: string, password: string) {
  try {
    if (!email || !password)
      return {
        error: "Invalid details",
      };
    const existing = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });
    if (!existing)
      return {
        error: "User not found",
      };
    if (!existing.password) {
      return {
        error: "Invalid user details",
      };
    }
    const isValid = bcrypt.compare(password, existing.password);
    if (!isValid)
      return {
        error: "Incorrect password",
      };
    const cookie = await cookies();
    const session = await lucia.createSession(existing.id, {});
    const cookieSession = lucia.createSessionCookie(session.id);
    cookie.set(
      cookieSession.name,
      cookieSession.value,
      cookieSession.attributes
    );
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Error occured",
    };
  }
}
