import { Lucia, TimeSpan } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { User, PrismaClient } from "@prisma/client";
import { env } from "process";

const client = new PrismaClient();
const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      email: attributes.email,
      firstName: attributes.firstName,
      lastName: attributes.lastName,
      phone: attributes.phoneNumber,
      role: attributes.role,
    };
  },
  sessionExpiresIn: new TimeSpan(30, "d"),
  sessionCookie: {
    name: "session",
    expires: true, // session cookies have very long lifespan (2 years)
    attributes: {
      secure: env.NODE_ENV === "production",
    },
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseSessionAttributes: DatabaseSessionAttributes;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes extends Omit<User, "password"> {}
