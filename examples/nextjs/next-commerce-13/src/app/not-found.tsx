import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-sans">
        <h1 className="text-2xl font-bold mb-4 text-black">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-center text-black">
          The page you are looking for does not exist.
        </p>
        <Button asChild variant="default" size="default">
          <a href="/">Go back home</a>
        </Button>
      </div>
    </div>
  );
}
