import "@/styles/globals.css";

import { Metadata } from "next";
import { Providers } from "./providers";
import "@fontsource-variable/inter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Default name",
    template: `%s - Default name`,
  },
  description: "Default description",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Providers className="flex flex-col justify-between min-h-screen">
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
