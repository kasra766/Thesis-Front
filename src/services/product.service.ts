import { api } from "@/lib/axios";
import { CreateProductDto, Product, Products, UpdateProductDto } from "@/types/product";
import { Pagination } from "@/types/shared";

export const productService = {
  async getProducts(params?: Pagination) {
    const { data } = await api.get<Products>("/products", {
      params,
    });

    return data;
  },

  async getProduct(id: string) {
    const { data } = await api.get<Product>(`/products/${id}`);

    return data;
  },

  async createProduct(dto: CreateProductDto) {
    const { data } = await api.post("/products", dto);

    return data;
  },

  async updateProduct(id: string, dto: UpdateProductDto) {
    const { data } = await api.patch(`/products/${id}`, dto);

    return data;
  },

  async deleteProduct(id: string) {
    const { data } = await api.delete(`/products/${id}`);

    return data;
  },
};
