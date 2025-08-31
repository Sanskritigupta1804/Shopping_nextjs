
"use client";

import { useEffect, useState } from "react";
import CategoriesBar from "./CategoriesBar";
import HeroCarousel from "./HeroCarousel";

type Category = {
  id: number;
  name: string;
};

export default function CategoriesHeroWrapper() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].id); 
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p className="text-center py-6">Loading categories...</p>;

  return (
    <>
      <CategoriesBar
        categories={categories}
        selected={selectedCategory ?? -1}
        onSelect={setSelectedCategory}
      />

      {selectedCategory && (
        <div>
         
          <h2 className="text-xl font-bold mt-8 px-6">
            {categories.find((c) => c.id === selectedCategory)?.name} - Latest
          </h2>
          <HeroCarousel categoryId={selectedCategory} />

          
          <h2 className="text-xl font-bold mt-8 px-6">
            {categories.find((c) => c.id === selectedCategory)?.name} - Best Deals
          </h2>
          <HeroCarousel categoryId={selectedCategory} />
        </div>
      )}
    </>
  );
}
