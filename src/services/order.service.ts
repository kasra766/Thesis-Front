import { api } from "@/lib/axios";
import { CreateOrderDto, Order, UpdateOrderDto } from "@/types/order";

export const orderService = {
  createOrder: async (dto: CreateOrderDto) => {
    const { data } = await api.post("/orders", dto);
    return data;
  },

  getMyOrders: async () => {
    const { data } = await api.get<Order[]>("/orders/my");
    return data;
  },

  getMyOrder: async (id: string) => {
    const { data } = await api.get<Order>(`/orders/my/${id}`);
    return data;
  },

  getOrders: async () => {
    const { data } = await api.get<Order[]>("/orders");
    return data;
  },

  getOrder: async (id: string) => {
    const { data } = await api.get<Order>(`/orders/${id}`);
    return data;
  },

  getUserOrders: async (userId: string) => {
    const { data } = await api.get<Order[]>(`/orders/user/${userId}`);

    return data;
  },

  updateOrder: async (id: string, dto: UpdateOrderDto) => {
    const { data } = await api.patch(`/orders/${id}`, dto);

    return data;
  },

  async deleteOrder(id: string) {
    const { data } = await api.delete(`/orders/${id}`);

    return data;
  },
};
