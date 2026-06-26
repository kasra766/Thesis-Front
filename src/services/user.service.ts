import { api } from "@/lib/axios";
import { Pagination } from "@/types/shared";
import { User, UpdateUserDto, Users } from "@/types/user";

export const userService = {
  async getUsers(params?: Pagination) {
    const { data } = await api.get<Users>("/users", {
      params,
    });

    return data;
  },

  async getUser(id: string) {
    const { data } = await api.get<User>(`/users/${id}`);

    return data;
  },

  async updateUser(id: string, dto: UpdateUserDto) {
    const { data } = await api.patch(`/users/${id}`, dto);

    return data;
  },

  async deleteUser(id: string) {
    const { data } = await api.delete(`/users/${id}`);

    return data;
  },
};
