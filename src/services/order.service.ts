import { api } from "@/lib/axios";
import { CreateOrderDto, Order, Orders, UpdateOrderDto } from "@/types/order";
import { Pagination } from "@/types/shared";

export const orderService = {
  createOrder: async (dto: CreateOrderDto) => {
    const { data } = await api.post("/orders", dto);
    return data;
  },

  getMyOrders: async (params?: Pagination) => {
    const { data } = await api.get<Orders>("/orders/my", {
      params,
    });
    return data;
  },

  getMyOrder: async (id: string) => {
    const { data } = await api.get<Order>(`/orders/my/${id}`);
    return data;
  },

  getOrders: async (params?: Pagination) => {
    const { data } = await api.get<Orders>("/orders", {
      params,
    });
    return data;
  },

  getOrder: async (id: string) => {
    const { data } = await api.get<Order>(`/orders/${id}`);
    return data;
  },

  getUserOrders: async (userId: string) => {
    const { data } = await api.get<Orders>(`/orders/user/${userId}`);

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
