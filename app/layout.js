import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto ({
  variable: "--font-roboto",
  subsets: ["cyrillic-ext"],
  weight: ["900","800","700"],
});
const montserrat = Montserrat ({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600"],
})

export const metadata = {
  title: "Rent House",
  description: "un site de location des maisons ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
