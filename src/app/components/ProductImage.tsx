"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
};

export default function ProductImage({ src, alt }: ProductImageProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? "/fallback.png" : src} 
      alt={alt}
      width={200}
      height={200}
      className="object-contain h-40"
      onError={() => setError(true)} // switch to fallback on error
    />
  );
}
