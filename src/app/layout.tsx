import "./globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import { archivo, cabinetGrotesk } from "@/lib/customFonts";

export const metadata: Metadata = {
  title: "Studio IX - Creative Agency",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased overflow-x-hidden h-fit",
          `${archivo.variable} ${cabinetGrotesk.variable}`
        )}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
