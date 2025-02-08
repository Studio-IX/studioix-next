import "../globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import Footer from "@/components/common/footer";
import { Navigation } from "@/components/common/navigation";
import { archivo, cabinetGrotesk } from "@/lib/customFonts";
import { Toaster } from "react-hot-toast";
import Popup from "@/components/common/popup";

const baseUrl = "https://studioix.agency";
const wwwBaseUrl = "https://www.studioix.agency";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "MVP development agency",
    "Startup MVP builder",
    "Quick MVP development",
    "6-week MVP development",
    "Minimum viable product",
    "Tech startup agency",
    "Rapid prototyping",
    "Product strategy",
    "Software development",
    "Product validation",
    "Startup consulting",
    "Digital product design",
    "Web application development",
    "Mobile app development",
    "Full-stack development",
  ],
  title: "Studio IX — Build Your MVP In 6 Weeks",
  description:
    "We craft MVPs that transform ideas into scalable, investor-ready products. Partner with us to bring your vision to life with speed, precision, and impact.",
  openGraph: {
    title: "Studio IX — Build Your MVP In 6 Weeks",
    siteName: "Astrae Design",
    description:
      "We craft MVPs that transform ideas into scalable, investor-ready products. Partner with us to bring your vision to life with speed, precision, and impact.",
    images: ["/images/thumbnail.png"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio IX — Build Your MVP In 6 Weeks",
    description:
      "We craft MVPs that transform ideas into scalable, investor-ready products. Partner with us to bring your vision to life with speed, precision, and impact.",
    images: ["/images/thumbnail.png"],
    creator: "@studioixagency",
  },
  icons: "/favicon.ico",
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
          "antialiased bg-black select-none",
          `${archivo.variable} ${cabinetGrotesk.variable}`
        )}
      >
        <Toaster
          containerStyle={{ zIndex: "214748300544 !important" }}
          toastOptions={{
            position: "bottom-center",
            style: {
              border: "1px solid #262626",
              fontFamily: "--var(font-archivo)",
              padding: "16px",
              borderRadius: "1000px",
              background: "#161616",
              color: "#FFF",
            },
          }}
        />
        <Analytics />
        <Navigation />
        <div className=" min-h-screen w-full">{children}</div>
        <Footer />
        <Popup />
      </body>
    </html>
  );
}
