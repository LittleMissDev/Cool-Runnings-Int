import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cool Runnings Int",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/br-cobane" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
