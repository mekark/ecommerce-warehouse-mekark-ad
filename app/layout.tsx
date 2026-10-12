import type { Metadata } from "next";
import Script from "next/script";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "./globals.css";

const GTM_ID = "GTM-5SBMM86H";
const GTM_LOAD_DELAY_MS = 5000;

export const metadata: Metadata = {
  title:
    "Turnkey ecommerce warehouse construction Company – ecommerce warehouse contractor",
  description:
    "Leading Turnkey ecommerce Warehouse EPC & Turnkey ecommerce logistics warehouse Construction Company – ecommerce fulfilment center warehouse construction Turnkey EPC expertise in In House PEB Manufacturing, Civil, PEB, MEP and Seamless Execution servicing the needs of Turnkey ecommerce warehouse Contractor & Turnkey ecommerce fulfilment centre , distribution center warehouse construction Company",
  icons: {
    icon: "/Images/LogoMekark.webp",
    shortcut: "/Images/LogoMekark.webp",
    apple: "/Images/LogoMekark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* Sets --cw before first paint so scaled desktop sections never flash zoomed-in */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;function u(){d.style.setProperty('--cw',d.clientWidth)}u();addEventListener('resize',u)})();`,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i,delay){
                w[l]=w[l]||[];

                // Load GTM ${GTM_LOAD_DELAY_MS / 1000}s after the page is ready
                setTimeout(function(){
                  w[l].push({
                    'gtm.start': new Date().getTime(),
                    event:'gtm.js'
                  });

                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';

                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                  f.parentNode.insertBefore(j,f);
                }, delay);
              })(window,document,'script','dataLayer','${GTM_ID}',${GTM_LOAD_DELAY_MS});
            `,
          }}
        />

        {children}

        <ScrollToTopButton />
      </body>
    </html>
  );
}
