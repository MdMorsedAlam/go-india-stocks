import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home || Go India Stocks",
  description: "Go India Stocks",
  icons: {
    icon: ["../../public/go-india-stocks.png"],
    apple: ["../../public/go-india-stocks.png"],
    shortcut: ["../../public/go-india-stocks.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
