import { api } from "@/lib/axios";
import { User, UpdateUserDto } from "@/types/user";

export const userService = {
  async getUsers() {
    const { data } = await api.get<User[]>("/users");

    return data;
  },

  async getUser(id: string) {
    const { data } = await api.get<User>(
      `/users/${id}`,
    );

    return data;
  },

  async updateUser(
    id: string,
    dto: UpdateUserDto,
  ) {
    const { data } = await api.patch(
      `/users/${id}`,
      dto,
    );

    return data;
  },

  async deleteUser(id: string) {
    const { data } = await api.delete(
      `/users/${id}`,
    );

    return data;
  },
};