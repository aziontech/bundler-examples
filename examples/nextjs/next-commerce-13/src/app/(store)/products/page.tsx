import { ProductList } from "@/components/product-list";
import { Product } from "@/types/product";

async function getAllProducts(): Promise<Product[]> {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/products`;
  const res = await fetch(url, {
    next: {
      revalidate: 180, // 3 minutes
      tags: ["products"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();
  
  // Return all products for products page
  return products;
}

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-extrabold mb-4">
              🛍️ All Products
            </h1>
            <p className="text-xl mb-6">
              Explore our complete collection of premium products designed for your lifestyle
            </p>
            <div className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg">
              <span className="mr-2">🌟</span>
              {products.length} Products Available
              <span className="ml-2">🌟</span>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Categories</option>
                  <option value="shoes">Shoes</option>
                  <option value="accessories">Accessories</option>
                  <option value="clothing">Clothing</option>
                  <option value="bottles">Bottles</option>
                </select>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Our Products
              </h2>
              <span className="text-gray-600">
                Showing {products.length} products
              </span>
            </div>
            <ProductList products={products} />
          </div>
        </section>

        {/* Product Features */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Product Guarantees
            </h2>
            <p className="text-lg text-gray-600">
              Every product comes with our quality promise
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 px-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Tested
              </h3>
              <p className="text-gray-600 text-sm">
                All products undergo rigorous quality testing
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600 text-sm">
                Free delivery on orders over $75
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Returns
              </h3>
              <p className="text-gray-600 text-sm">
                30-day hassle-free return policy
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600 text-sm">
                Your payment information is always protected
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📧 Get Product Updates!
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to be notified when we add new products to our collection.
            Never miss out on the latest arrivals!
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Join 10,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </section>

        {/* Back to Home */}
        <section className="mt-12 text-center">
          <a 
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          >
            <span className="mr-2">🏠</span>
            Back to Home
          </a>
        </section>
      </div>
    </main>
  );
}

// Static generation configuration
export const dynamic = 'force-static';
export const revalidate = 180;
