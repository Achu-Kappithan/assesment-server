import { User, UserDocument } from '../schemas/user.schema.js';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto.js';


export interface IUserRepository {
  findAll(): Promise<UserDocument[]>;
  findById(id: string): Promise<UserDocument | null>;
  findByEmail(email: string): Promise<UserDocument | null>;
  create(dto: CreateUserDto): Promise<UserDocument>;
  update(id: string, dto: UpdateUserDto): Promise<UserDocument | null>;
  delete(id: string): Promise<UserDocument | null>;
}

export const USER_REPOSITORY = Symbol('IUserRepository');
