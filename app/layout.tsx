import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { env } from "@/config/env";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-59FJ940C83";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pastoral Juvenil — Nuestra Señora de la Paz",
  description:
    "Somos la comunidad de jóvenes de Nuestra Señora de la Paz en Ciudad Juárez. Crecemos en fe, servimos con alegría y construimos comunidad a través del encuentro con Cristo.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = env.ENVIRONMENT === "production";

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
          )}
      </head>
      <body
        className={`${anton.variable} ${plusJakarta.variable} bg-white text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
