
"use client";

import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import { Button } from "@/app/components/components/ui/button";
import { useCart } from "@/app/components/CartContext";
import Link from "next/link";
import { useProduct } from "@/app/components/ProductContext";


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
  const {setSelectedProduct} = useProduct()
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
      {products.map((product) => (
  <div
    key={product.id}
    className="min-w-[250px] bg-gray-100 rounded-xl shadow p-4 flex flex-col items-center"
  >
    {/* Clicking image/title will navigate to product page */}
    <Link href={`/product/${product.id}`} 
     onClick={() => setSelectedProduct(product)}
    className="w-full">
      <ProductImage src={product.images?.[0]} alt={product.title} />

      <p className="mt-4 text-sm font-medium text-center text-black">
        {product.title}
      </p>
    </Link>

    {/* Keep add-to-cart working directly */}
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
      ))}
    </div>
  );
}
