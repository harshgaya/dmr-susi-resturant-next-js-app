import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/footer";

export const metadata = {
  title: "DMR Sushi Restaurant",
  description:
    "DMR Sushi Restaurant offering the best sushi and Japanese cuisine.",
  keywords:
    "DMR Sushi, Sushi Restaurant, Japanese Cuisine, Sushi, Fine Dining, Japanese Food, Sushi Rolls, Best Sushi in Town",
  authors: [{ name: "DMR Sushi Restaurant", url: "" }],
  creator: "DMR Sushi Restaurant",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "DMR Sushi Restaurant",
    description:
      "DMR Sushi Restaurant offering the best sushi and Japanese cuisine.",
    url: "",
    type: "website",
    siteName: "DMR Sushi Restaurant",
    images: [
      {
        url: "/home/logo_res.png",
        width: 1200,
        height: 630,
        alt: "DMR Sushi Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DMR_Sushi_Restaurant",
    title: "DMR Sushi Restaurant",
    description:
      "DMR Sushi Restaurant offering the best sushi and Japanese cuisine.",
    images: ["/home/logo_res.png"],
  },
  icons: {
    icon: "/home/logo_res.png",
    apple: "/home/logo_res.png",
  },
  alternates: {
    canonical: "",
    languages: {
      en: "",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-customBgColor">
        {children}
        <Footer />
      </body>
    </html>
  );
}
