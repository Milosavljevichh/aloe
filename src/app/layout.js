import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forever Living Products | Internet prodavnica",
  description: "Internet prodavnica kompanije Forever Living Products doo Beograd je jedina zvanična prodavnica artikala sa obeležjima Forever Living Products International.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-white min-h-screen`}
      >
      {/* <HeaderBlack /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
