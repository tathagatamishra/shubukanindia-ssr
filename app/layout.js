import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubukan India",
  description: "Shorin Ryu Shubukan Uema Dojo India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="App">
          <Navbar />
          <div className="webBody">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
