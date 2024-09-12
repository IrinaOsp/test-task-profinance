import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AsidePanel from "./components/AsidePanel/AsidePanel";
import { Providers } from "@/redux/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Test assignment Profinance",
  description: "Test assignment Profinance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 w-svw min-h-screen overflow-x-hidden`}
      >
        <Providers>
          <main className="flex w-full max-w-screen-2xl mx-auto">
            <AsidePanel />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
