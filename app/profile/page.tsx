"use client";

import { UserAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, isAuthLoading } = UserAuth() || {};
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        {isAuthLoading
          ? "Loading..."
          : user
          ? "Profile page"
          : "you are not logged in"}
      </div>
    </main>
  );
}
