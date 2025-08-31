"use client";

import { useProduct } from "@/app/components/ProductContext";
import { useCart } from "@/app/components/CartContext";
import ProductImage from "@/app/components/ProductImage";
import { Button } from "@/app/components/components/ui/button";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar"

export default function ProductPage() {
  const { selectedProduct } = useProduct();
  const { addToCart } = useCart();
  const router = useRouter();

  if (!selectedProduct) {
    // if user refreshes page, product context is lost
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Product not found.</p>
        <Button onClick={() => router.push("/")}>Go Back</Button>
      </div>
    );
  }

  return (
    <div> 
        <Navbar></Navbar>
         <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
        
      <ProductImage
        src={selectedProduct.images?.[0]}
        alt={selectedProduct.title}
      />

      <h1 className="mt-6 text-2xl font-bold">{selectedProduct.title}</h1>
      <p className="mt-4 text-gray-700">{selectedProduct.description}</p>

      <Button
        className="mt-6 w-full"
        onClick={() =>
          addToCart({
            id: selectedProduct.id,
            title: selectedProduct.title,
            image: selectedProduct.images?.[0],
          })
        }
      >
        Add to Cart
      </Button>
    </div>
    </div>
   
  );
}
