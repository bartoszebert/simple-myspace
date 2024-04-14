"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "authenticated")
    return (
      <>
        <Link href="/dashboard" style={{ marginRight: "10px" }}>
          <Image
            src={session.user?.image ?? "/mememan.webp"}
            width={32}
            height={32}
            alt="Your name"
          />
        </Link>
        <SignOutButton />
      </>
    );

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
