import "./globals.css";
import { Italiana } from "next/font/google";
import Header from "../components/header";

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Bernardo Etges",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={italiana.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
