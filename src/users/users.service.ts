import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import type { UserDocument } from './schemas/user.schema.js';
import type {
  IUserRepository,
} from './repositories/user.repository.interface.js';
import { USER_REPOSITORY } from './repositories/user.repository.interface.js';
import type { CreateUserDto, UpdateUserDto } from './dto/user.dto.js';



@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async findAll(): Promise<UserDocument[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise<UserDocument> {
    return this.userRepository.create(dto);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserDocument> {
    const user = await this.userRepository.update(id, dto);
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.userRepository.delete(id);
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
  }
}
