export type Product = {
  id: string;
  name: string;
  slug: string;
  images: string[];
  price: number;
  currency: string;
  description: string;
  discountPercentage?: number;
};
