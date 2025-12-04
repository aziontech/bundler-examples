import Image from "next/image";
import { Product } from "@/types/product";
import { ProductPrice } from "./product-price";

interface ProductCardProps {
  product: Product;
  index: number;
  showDiscount?: boolean;
}

export const ProductCard = ({
  product,
  index,
  showDiscount = true,
}: ProductCardProps) => {
  const hasDiscount =
    showDiscount &&
    product.discountPercentage &&
    product.discountPercentage > 0;

  return (
    <li className="group relative h-full">
      <a href={`/products/${product.id}`} className="block h-full">
        <article className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              -{product.discountPercentage}%
            </div>
          )}

          {product.images[0] && (
            <div className="rounded-t-lg aspect-square w-full overflow-hidden bg-neutral-100">
              <Image
                className="group-hover:scale-105 w-full bg-neutral-100 object-cover object-center transition-transform duration-300"
                src={product.images[0]}
                width={768}
                height={768}
                loading={index < 3 ? "eager" : "lazy"}
                priority={index < 3}
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 700px"
                alt={product.name}
              />
            </div>
          )}

          <div className="p-6 flex flex-col text-center items-center flex-grow">
            <h2 className="text-xl font-medium text-neutral-700 mb-4">
              {product.name}
            </h2>

            {/* Spacer to push price to bottom */}
            <div className="flex-grow"></div>

            <footer className="text-base font-normal text-neutral-900 mt-auto">
              <ProductPrice
                product={product}
                size="small"
                showDiscount={showDiscount}
              />
            </footer>
          </div>
        </article>
      </a>
    </li>
  );
};
