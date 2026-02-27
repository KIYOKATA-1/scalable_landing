import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serendale.ai"),
  title: "Serendale AI - AI Based Blockchain Platform",
  description:
    "Serendale AI helps teams ship secure, scalable AI products with realtime performance and production-ready infrastructure.",
  openGraph: {
    title: "Serendale AI - AI Based Blockchain Platform",
    description:
      "Secure and scalable AI product infrastructure with realtime performance.",
    type: "website",
    siteName: "Serendale AI",
    url: "/",
    images: [
      {
        url: "/images/main.webp",
        width: 1605,
        height: 505,
        alt: "Serendale AI hero visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendale AI - AI Based Blockchain Platform",
    description:
      "Secure and scalable AI product infrastructure with realtime performance.",
    images: ["/images/main.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
