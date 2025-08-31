
"use client";

import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import { Button } from "@/app/components/components/ui/button";
import { useCart } from "@/app/components/CartContext";

type Product = {
  id: number;
  title: string;
  images: string[];
};

type HeroCarouselProps = {
  categoryId: number;
};

export default function HeroCarousel({ categoryId }: HeroCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <p className="text-center py-6">Loading products...</p>;

  return (
    <div id="shop" className="flex overflow-x-auto gap-6 p-6 bg-white">
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] bg-gray-100 rounded-xl shadow p-4 flex flex-col items-center"
          >
            <ProductImage src={product.images?.[0]} alt={product.title} />

            <p className="mt-4 text-sm font-medium text-center text-black">
              {product.title}
            </p>

            <Button
              className="mt-3 w-full"
              onClick={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  image: product.images?.[0],
                })
              }
            >
              Add to Cart
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
