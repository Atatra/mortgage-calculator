import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const plusJakartaSans = localFont({
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-VariableFont_wght.ttf',
      style: "normal",
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      style: "italic",
    }
  ],
  variable: "--font-plusJakartaSans",
});

export const metadata: Metadata = {
  title: "Mortagage Calculator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mortgage Calculator</title>
      </head>
      <body className={plusJakartaSans.variable}>{children}</body>
    </html>
  );
}
