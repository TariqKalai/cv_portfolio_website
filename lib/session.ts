// lib/auth.ts (or wherever you put it)
// Remember: This must be a Server-side function.
"use server";
import { cookies } from "next/headers";
import { compare, hash } from "bcryptjs";

type Session = {
  isLoggedIn: boolean;
};

export async function getSession(): Promise<Session> {
  const sessionCookie = (await cookies()).get("session");
  if (!sessionCookie || !sessionCookie.value) {
    return { isLoggedIn: false };
  }

  const [username, signature] = sessionCookie.value.split(";");
  const secret = process.env.SECRET;

  // 🔑 SECURITY CHECK: Re-hash and compare
  const expectedSignature = await hash(secret! + username, 10);

  if (signature === expectedSignature) {
    return { isLoggedIn: true };
  } else {
    // Optionally clear tampered cookie
    (await cookies()).delete("session");
    return { isLoggedIn: false };
  }
}
