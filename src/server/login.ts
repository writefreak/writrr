// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import prisma from "@/lib/prisma";

// export async function loginUser(email: string, password: string) {
//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (!user || !(await bcrypt.compare(password, user.password || ""))) {
//     return { error: "Invalid credentials" };
//   }

//   // Create a session for the user
//   const session = await prisma.session.create({
//     data: {
//       userId: user.id,
//       expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day session expiry
//     },
//   });

//   // Set the session cookie
//   const response = NextResponse.redirect("/dashboard");

//   response.cookies.set("auth-session", session.id, {
//     httpOnly: true, // Secure flag so cookie is not accessible via JavaScript
//     secure: process.env.NODE_ENV === "production", // Only set as secure in production
//     path: "/", // Ensure cookie is available across all pages
//     maxAge: 1000 * 60 * 60 * 24, // 1 day expiry
//   });

//   return response;
// }
