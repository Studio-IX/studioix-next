import { Metadata } from "next";

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
  title: "Blog CMS — Studio IX",
  description:
    "We craft MVPs that transform ideas into scalable, investor-ready products. Partner with us to bring your vision to life with speed, precision, and impact.",
  openGraph: {
    title: "Blog CMS — Studio IX",
    siteName: "Studio IX",
    description:
      "We craft MVPs that transform ideas into scalable, investor-ready products. Partner with us to bring your vision to life with speed, precision, and impact.",
    images: ["/images/thumbnail.png"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog CMS — Studio IX",
    description:
      "We craft MVPs that transform ideas into scalable, investor-ready products. Partner with us to bring your vision to life with speed, precision, and impact.",
    images: ["/images/thumbnail.png"],
    creator: "@studioixagency",
  },
  icons: "/favicon.ico",
};

const SanityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default SanityLayout;
