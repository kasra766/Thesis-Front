export const queryKeys = {
  products: ["products"] as const,

  product: (id: string) => ["products", id] as const,
};
