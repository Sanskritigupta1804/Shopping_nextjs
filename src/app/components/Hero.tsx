
import Image from "next/image";
import { fetchProducts } from "../fetchProducts";
// async function fetchProducts() {
//   const res = await fetch("https://api.escuelajs.co/api/v1/products");
//   if (!res.ok) throw new Error("Failed to fetch products");

//   console.log(res.json())
//   return res.json();
// }

export default async function Hero() {
  const products = await fetchProducts();


  const randomIndex = Math.floor(Math.random() * products.length);
  const banner = products[randomIndex];
  console.log("banner",banner)

  return (
    <section id="hero" className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900 text-white">
   
      <Image
        src={banner.images[0]}
        alt={banner.title}
        fill
        className="object-cover"
        priority
      />

      
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
          {banner.title}
        </h1>
        <p className="text-sm mb-6 line-clamp-3 drop-shadow-lg">
          {banner.description}
        </p>
        
      </div>
    </section>
  );
}
