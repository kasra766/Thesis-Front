export interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface Orders {
  count: number;
  data: Order[];
}

export interface CreateOrderDto {
  productId: string;
  quantity: number;
}

export interface UpdateOrderDto {
  quantity?: number;
}
