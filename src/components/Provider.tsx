"use client";

import { SessionProviderType } from "@/types/custom-types";
import { SessionProvider } from "next-auth/react";
const Provider = ({ children, session }: SessionProviderType) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
