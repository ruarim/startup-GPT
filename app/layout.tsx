import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const font = Lato({ weight: "100", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StartupGPT",
  description: "Bootstrap your next startup with the power of GPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <>{children}</>
      </body>
    </html>
  );
}
