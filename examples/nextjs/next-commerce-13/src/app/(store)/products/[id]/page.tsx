import { Button } from "@/components/ui/button";
import { ProductPrice } from "@/components/product-price";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function getProduct(id: string) {
  const url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/products/${id}`;
  const res = await fetch(url, {
    next: {
      revalidate: 180,
      tags: ["products"],
    },
  });

  if (!res.ok) {
    return notFound();
  }

  const product: Product = await res.json();
  return product;
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ variant?: string; image?: string }>;
}) {
  const params = await props.params;

  const product: Product = await getProduct(params.id);

  if (!product) {
    return notFound();
  }

  // Check if product has discount for badge display
  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-extrabold mb-4">
              ✨ Premium Quality Products ✨
            </h1>
            <p className="text-xl mb-6">
              Discover exceptional craftsmanship and unmatched quality in every detail
            </p>
            <div className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg">
              <span className="mr-2">🏆</span>
              Best in Class
              <span className="ml-2">🏆</span>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <article className="pb-12 bg-white rounded-lg shadow-md p-8 relative">
          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              -{product.discountPercentage}% OFF
            </div>
          )}
          
          <div className="mt-4 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-8">
              <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">
                {product.name}
              </h1>
              
              {/* Price Section */}
              <div className="mt-4">
                <ProductPrice product={product} size="large" showDiscount={true} />
              </div>
              <p className="mt-2 text-base font-normal text-neutral-900 py-5">
                {product.description}
              </p>
              
              {/* Product Features */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Product Features:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">✅</span>
                    Premium materials and construction
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✅</span>
                    30-day satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✅</span>
                    Free shipping on orders over $75
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✅</span>
                    Expert customer support
                  </li>
                </ul>
              </div>
              
              <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                🛒 Add to Cart
              </Button>
              
              {/* Trust Badges */}
              <div className="mt-6 flex justify-center items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <span className="mr-1">🔒</span>
                  Secure Payment
                </span>
                <span className="flex items-center">
                  <span className="mr-1">🚚</span>
                  Fast Delivery
                </span>
                <span className="flex items-center">
                  <span className="mr-1">↩️</span>
                  Easy Returns
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 lg:row-span-3 lg:row-start-1">
              <div className="grid gap-4 lg:grid-cols-3 [&>*:first-child]:col-span-3">
                {product.images.map((image, idx) => {
                  const params = new URLSearchParams({
                    image: idx.toString(),
                  });
                  return (
                    <a key={idx} href={`?${params}`}>
                      <Image
                        key={image}
                        className="w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity hover:opacity-90"
                        src={image}
                        width={700 / 3}
                        height={700 / 3}
                        sizes="(max-width: 1024x) 33vw, (max-width: 1280px) 20vw, 225px"
                        loading="eager"
                        priority
                        alt={product.name}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Section */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📧 Stay Updated with New Products!
          </h3>
          <p className="text-gray-600 mb-6">
            Be the first to discover our latest arrivals, exclusive deals, and product updates. 
            Join our community of satisfied customers!
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
            We respect your privacy. Unsubscribe at any time.
          </p>
        </section>

        {/* Related Products Suggestion */}
        <section className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            🔍 You Might Also Like
          </h3>
          <p className="text-gray-700 mb-4">
            Explore our curated collection of similar high-quality products
          </p>
          <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            View Similar Products
          </button>
        </section>
      </div>
    </main>
  );
}
