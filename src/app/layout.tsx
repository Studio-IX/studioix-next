import Footer from "@/components/common/footer";
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
    <html lang="en">
      <body
        className={cn(
          "antialiased overflow-hidden",
          `${archivo.variable} ${cabinetGrotesk.variable}`
        )}
      >
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}