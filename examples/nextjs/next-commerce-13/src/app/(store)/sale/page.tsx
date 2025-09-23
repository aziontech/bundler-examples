import { ProductList } from "@/components/product-list";
import { Product } from "@/types/product";

async function getProducts(): Promise<Product[]> {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/products?limit=true`;
  const res = await fetch(url, {
    next: {
      revalidate: false, // Static generation - will be revalidated via API
      tags: ["sale-products"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function SalePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg p-8 mb-8">
            <h1 className="text-5xl font-extrabold mb-4">
              🔥 MEGA SALE EVENT 🔥
            </h1>
            <p className="text-xl mb-6">
              Unbeatable prices on your favorite products!
            </p>
            <div className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-bold text-lg">
              <span className="mr-2">⚡</span>
              30% OFF EVERYTHING
              <span className="ml-2">⚡</span>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section>
          <ProductList products={products} showDiscount={true} />
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📧 Don&apos;t Miss Future Sales!
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and be the first to know about exclusive
            deals and promotions.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

// Static generation configuration
export const dynamic = "force-static";
export const revalidate = false;
