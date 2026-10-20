export class CreateUserDto {
  name: string;
  email: string;
  phone?: string;
  age?: number;
  address?: string;
}

export class UpdateUserDto {
  name?: string;
  email?: string;
  phone?: string;
  age?: number;
  address?: string;
  isActive?: boolean;
}
