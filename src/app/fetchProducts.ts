// fetchProducts.ts
export async function fetchProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
