"use client";

import { IconInnerShadowTop } from "@tabler/icons-react";

export function Nav() {
  return (
    <header className="z-50 py-4 sticky top-3 bg-white/90">
      <div className="mx-auto flex max-w-8xl items-center gap-2 px-6 flex-row sm:px-4 lg:px-6">
        <div className="flex flex-col items-center">
          <a href="#" className="flex items-center gap-2">
            <IconInnerShadowTop className="!size-5" />
            <span className="text-base font-semibold">Your Commerce.</span>
          </a>
        </div>
        {/* Menu */}
        <nav className="flex items-center gap-3 ml-10">
          <a href="/" className="text-base font-medium">
            Home
          </a>
          <a href="/products" className="text-base font-medium">
            Products
          </a>
          <a href="/sale" className="text-base font-medium">
            Sale
          </a>
        </nav>
      </div>
    </header>
  );
}
