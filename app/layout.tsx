import { Menu } from "@/components/menu";
import "./globals.css";
import { Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["cyrillic-ext"], weight: "400" });

export const metadata = {
  title: "Верные Сердца",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
