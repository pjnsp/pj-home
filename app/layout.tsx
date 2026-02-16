import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${anton.variable} ${plusJakarta.variable} bg-white text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
