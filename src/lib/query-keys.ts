export const queryKeys = {
  products: ["products"] as const,
  product: (id: string) => ["products", id] as const,

  orders: ["orders"] as const,

  order: (id: string) => ["orders", id] as const,

  myOrders: ["orders", "my"] as const,

  myOrder: (id: string) => ["orders", "my", id] as const,

  userOrders: (userId: string) => ["orders", "user", userId] as const,
};
