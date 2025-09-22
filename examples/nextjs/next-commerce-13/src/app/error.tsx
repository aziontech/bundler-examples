"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-sans">
        <h1 className="text-2xl font-bold mb-4 text-black">
          500 - Something went wrong!
        </h1>
        <p className="mb-6 text-center text-black">
          An internal server error occurred.
        </p>
        <div className="flex gap-3">
          <Button onClick={reset} variant="default" size="default">
            Try again
          </Button>
          <Button asChild variant="secondary" size="default">
            <a href="/">Go back home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
