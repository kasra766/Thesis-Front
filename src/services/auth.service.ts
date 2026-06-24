import { api } from "@/lib/axios";
import { LoginDto, RegisterDto } from "@/types/auth";

export const authService = {
  login: async (dto: LoginDto) => {
    const { data } = await api.post(
      "/auth/login",
      dto,
    );

    return data;
  },

  register: async (dto: RegisterDto) => {
    const { data } = await api.post(
      "/auth/register",
      dto,
    );

    return data;
  },
};