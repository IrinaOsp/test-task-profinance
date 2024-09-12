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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main className="flex bg-slate-100">
            <AsidePanel />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
