"use client";

import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthCheck({ children }: Props): JSX.Element {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Access Denied</p>;

  return <>{children}</>;
}
 