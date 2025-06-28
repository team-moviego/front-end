import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MovieGo",
  description: "MovieGo 영화 예매 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
