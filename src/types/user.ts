export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Users{
  count: number;
  data: User[];
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
}