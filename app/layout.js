import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic-ext"],
  weight: ["900", "800", "700"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Rent House",
  description: "un site de location des maisons ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon from favicon.io */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
