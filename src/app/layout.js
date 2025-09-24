import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata = {
  title: "RadicalNow Labs",
  description: "Radical Now Labs drives innovation with cutting-edge technology, creative solutions, and future-ready digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} font-sans antialiased`} suppressHydrationWarning
        >
        {children}
      </body>
    </html>
  );
}
