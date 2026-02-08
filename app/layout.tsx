import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HMPG — High Momentum Product Group",
  description:
    "직접 겪은 불편함에서 시작합니다. 1인 개발자와 메이커를 위한 프로덕트 그룹.",
  openGraph: {
    title: "HMPG — High Momentum Product Group",
    description:
      "직접 겪은 불편함에서 시작합니다. 1인 개발자와 메이커를 위한 프로덕트 그룹.",
    url: "https://hmpglab.com",
    siteName: "HMPG",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HMPG — High Momentum Product Group",
    description:
      "직접 겪은 불편함에서 시작합니다. 1인 개발자와 메이커를 위한 프로덕트 그룹.",
  },
  metadataBase: new URL("https://hmpglab.com"),
  verification: {
    other: {
      "facebook-domain-verification": ["2d5ol1nepus31epkzxc7sy5xktgawi"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
