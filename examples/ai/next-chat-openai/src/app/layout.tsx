import type { Metadata } from "next";
import { ReactNode } from "react";
import Logos from "@/components/atoms/logos";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Azion chat",
  description: "Azion Chat",
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-black">
              Azion Chat
            </h1>
          </header>
          {children}
          <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
            Azion @ {new Date().getFullYear()}
          </footer>
        </main>
      </body>
    </html>
  );
}

export default Layout;
