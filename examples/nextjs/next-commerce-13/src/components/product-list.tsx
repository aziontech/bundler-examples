import { Product } from "@/types/product";
import { ProductCard } from "./product-card";

interface ProductListProps {
  products: Product[];
  showDiscount?: boolean;
}

// filter because api.mock is not filtering
export const ProductList = ({
  products,
  showDiscount = false,
}: ProductListProps) => {
  // Filter products based on showDiscount prop
  const filteredProducts = products.filter((product) => {
    const hasDiscount =
      product.discountPercentage && product.discountPercentage > 0;

    if (showDiscount) {
      // Show only products WITH discount
      return hasDiscount;
    } else {
      // Show only products WITHOUT discount
      return !hasDiscount;
    }
  });

  return (
    <>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            index={idx}
            showDiscount={showDiscount}
          />
        ))}
      </ul>
    </>
  );
};
