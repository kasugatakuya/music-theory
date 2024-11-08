import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "音楽理論アプリ",
  description:
    "音楽理論アプリは、音楽理論を視覚的にわかりやすく学べるアプリです。",
  keywords:
    "音楽, 音楽理論, 音楽理論アプリ, 音楽理論学習, 音楽理論勉強, 音楽理論練習, 音楽理論問題",
  openGraph: {
    title: "音楽理論アプリ",
    description:
      "音楽理論アプリは、音楽理論を視覚的にわかりやすく学べるアプリです。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <div className="h-screen">{children}</div>
        <footer className="text-md py-8 text-center bg-black text-white">
          <p>© 音楽理論アプリ 2023-{new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
