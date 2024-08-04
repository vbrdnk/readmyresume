"use client";

import { useUser } from "@clerk/nextjs";

import Image from "next/image";

const LoadingState = () => {
  return (
    <div className="flex w-full gap-4 items-center justify-start animate-pulse">
      <div className="inline-block bg-slate-700 h-20 w-20 rounded-full" />
      <div className="bg-slate-700 w-48 h-4 rounded-md" />
    </div>
  );
};

export const UserInfo = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <LoadingState />;

  if (!user) return null;

  return (
    <div className="flex w-full gap-4 items-center justify-start">
      <Image
        alt={`${user.fullName}'`}
        className="inline-block h-20 w-20 rounded-full"
        height={80}
        src={`${user.imageUrl}`}
        width={80}
      />
      <span>{user.fullName}</span>
    </div>
  );
};
