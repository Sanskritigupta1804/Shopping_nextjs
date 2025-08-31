"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { UIDReset } from "react-uid";

type Product = {
  id: number;
  title: string;
  description?: string;
  images: string[];
};

type ProductContextType = {
  selectedProduct: Product | null;
  setSelectedProduct: (p: Product) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      <UIDReset>
         {children}
        </UIDReset>  
     
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProduct must be used inside ProductProvider");
  return ctx;
}
