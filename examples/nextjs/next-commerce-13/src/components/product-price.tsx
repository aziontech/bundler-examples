import { formatCurrency } from "@/utils/currency";
import { Product } from "@/types/product";

interface ProductPriceProps {
  product: Product;
  size?: "small" | "medium" | "large";
  showDiscount?: boolean;
}

export const ProductPrice = ({
  product,
  size = "medium",
  showDiscount = true,
}: ProductPriceProps) => {
  const hasDiscount =
    showDiscount &&
    product.discountPercentage &&
    product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage! / 100)
    : product.price;

  const sizeClasses = {
    small: {
      discounted: "text-lg font-bold text-red-600",
      original: "text-sm text-gray-500 line-through",
      savings: "text-xs text-green-600 font-medium",
      regular: "text-lg font-bold",
    },
    medium: {
      discounted: "text-2xl font-bold text-red-600",
      original: "text-lg text-gray-500 line-through",
      savings: "text-sm text-green-600 font-medium",
      regular: "text-2xl font-bold",
    },
    large: {
      discounted: "text-3xl font-bold text-red-600",
      original: "text-xl text-gray-500 line-through",
      savings: "text-lg text-green-600 font-semibold",
      regular: "text-3xl font-bold",
    },
  };

  const classes = sizeClasses[size];

  if (hasDiscount) {
    return (
      <div className="space-y-1 min-h-[4.5rem] flex flex-col justify-center">
        {/* Discounted Price */}
        <p className={classes.discounted}>
          {formatCurrency(discountedPrice, product.currency)}
        </p>
        {/* Original Price */}
        <p className={classes.original}>
          {formatCurrency(product.price, product.currency)}
        </p>
        {/* Savings */}
        <p className={classes.savings}>
          {size === "large" ? "You save " : "Save "}
          {formatCurrency(product.price - discountedPrice, product.currency)}
          {size === "large" ? "!" : ""}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[4.5rem] flex items-center justify-left">
      <p className={`${classes.regular} text-foreground/70`}>
        {formatCurrency(product.price, product.currency)}
      </p>
    </div>
  );
};
