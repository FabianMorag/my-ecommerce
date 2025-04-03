"use client";

// import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
  className?: string;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, className }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider className={className} navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}
