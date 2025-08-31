
"use client";

import { Button } from "@/app/components/components/ui/button";

type Category = {
  id: number;
  name: string;
};

type CategoriesBarProps = {
  categories: Category[];
  selected: number;
  onSelect: (categoryId: number) => void;
};

export default function CategoriesBar({
  categories,
  selected,
  onSelect,
}: CategoriesBarProps) {
  const excluded = ["glasss", "multik", "Grosery", "Computer Category","vrwcdxsr42ed","Cars","t-shirt", "computers",
"nature", "bread", "categoria 5"];
const included = ["Clothes","Electronics",
"Furniture", "Shoes", "Miscellaneous"
]

  return (
    <div className="flex justify-center gap-4 py-4 bg-gray-50 shadow overflow-x-auto">
      {categories
        .filter((cat) => included.includes(cat.name))
        .map((cat) => (
          <Button
            key={cat.id}
            variant={selected === cat.id ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => onSelect(cat.id)}
          >
            {cat.name}
          </Button>
        ))}
    </div>
  );
}
