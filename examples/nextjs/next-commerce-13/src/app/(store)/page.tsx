import { Banner } from "@/components/banner";
import { ProductList } from "@/components/product-list";
import { Product } from "@/types/product";

async function getProducts() {
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

  // Filter not discounted products and limit to 3 products for home page
  // since the api.mock.com does not have pagination, we limit the products to 3
  return products
    .filter((product: Product) => !product.discountPercentage)
    .slice(0, 3);
}

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <section>
          <Banner />
        </section>

        {/* Featured Stats */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Premium Products</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🌟 Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products, carefully
              curated for quality and style.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ProductList products={products} />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg my-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🏆 Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Every product is carefully selected and tested to meet our high
                standards of quality and durability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your orders delivered quickly with our efficient shipping
                network and tracking system.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is here to help you with any
                questions or concerns you may have.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white rounded-lg shadow-lg my-12">
          <div className="text-center max-w-2xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📬 Stay in the Loop!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community and be the first to know about new arrivals,
              exclusive deals, and special promotions. Plus, get 10% off your
              first order!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>

            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="mr-2">🎁</span>
                10% Off First Order
              </span>
              <span className="flex items-center">
                <span className="mr-2">📧</span>
                No Spam, Ever
              </span>
              <span className="flex items-center">
                <span className="mr-2">🔓</span>
                Unsubscribe Anytime
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-center my-12">
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Ready to Transform Your Style?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of satisfied customers who have discovered their
              perfect style with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                🛍️ Start Shopping
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-full transition-all duration-300">
                📞 Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
