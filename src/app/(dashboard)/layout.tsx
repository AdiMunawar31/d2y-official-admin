import Sidebar from "@/components/Sidebar";
import "../globals.css";
import { Quicksand } from "next/font/google";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ subsets: ["vietnamese"] });

export const metadata = {
  title: "D2Y OFFICIAL",
  description: "PROFESSIONAL WEBSITE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {/* <main className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
          <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 max-w-7xl my-4">
            <Sidebar />
            <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6"> */}
        <div className="w-full bg-white shadow-xl rounded-lg grid grid-cols-10 overflow-x-auto">
          <Sidebar />
          <div className="col-span-8">
            {/* <Topbar /> */}
            <Navbar />

            {children}
          </div>
        </div>
        {/* </div>
          </div>
        </main> */}
      </body>
    </html>
  );
}
