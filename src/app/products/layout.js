import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import HeaderBlack from "@/components/HeaderBlack";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderBlack />
        {children}
    </>
  );
}
