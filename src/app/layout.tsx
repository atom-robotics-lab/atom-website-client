import type { Metadata } from "next";
import { Inter , Poppins} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); // Add desired weights

export const metadata: Metadata = {
  title: "Atom Robotics Website",
  description: "Official Website of ATOM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
