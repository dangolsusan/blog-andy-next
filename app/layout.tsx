import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Susan's Blog",
  description: "Created by Susan Dangol",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="dark:bg-slate-800 ">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
