"use client";

import { useRouter } from "next/navigation";
import { startTransition, useState, useTransition } from "react";

interface Props {
  isFollowing: boolean;
  targetUserId: string;
}

export default function FollowClient({ isFollowing, targetUserId }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const isMutating = isPending || isFetching;

  const follow = async () => {
    setIsFetching(true);

    await fetch("/api/follow/", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    startTransition(() => router.refresh());
  };

  const unfollow = async () => {
    setIsFetching(true);

    await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);

    startTransition(() => router.refresh());
  };

  if (isFollowing) {
    return (
      <button onClick={unfollow}>{isMutating ? "..." : "Unfollow"}</button>
    );
  }

  return <button onClick={follow}>{isMutating ? "..." : "Follow"}</button>;
}
