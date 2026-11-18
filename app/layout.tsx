import type { Metadata } from "next";
import DeferredGoogleTagManager from "@/components/DeferredGoogleTagManager";
import { assetUrl } from "@/lib/assetPrefix";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MobileStickyBar from "@/components/MobileStickyBar";

import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";

export const metadata: Metadata = {
  title: "E-Commerce Fulfillment Center Construction Company | Mekark",
  description:
    "Premier ecommerce warehouse contractor in India. We build high-throughput fulfillment centers with multi-tier mezzanines, AGV floors & ESFR fire systems.",
  icons: {
    icon: assetUrl("/Mekark%20Favicon-32x32px.png"),
    shortcut: assetUrl("/Mekark%20Favicon-32x32px.png"),
    apple: assetUrl("/Images/LogoMekark.webp"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col max-md:pb-16">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <Footer />

        <MobileStickyBar />
        <ScrollToTopButton />
        <DeferredGoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
