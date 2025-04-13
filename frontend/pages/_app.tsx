import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    weight: ["500","600","700","800"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={plusJakartaSans.className} {...pageProps} />;
}
