import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-2 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
