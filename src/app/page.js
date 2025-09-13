"use client"

import UserButton from "@/components/user_button";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <UserButton/>
      </SessionProvider>
    </div>
  );
}
