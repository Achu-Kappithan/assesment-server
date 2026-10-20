import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema.js';
import { UserRepository } from './repositories/user.repository.js';
import { USER_REPOSITORY } from './repositories/user.repository.interface.js';
import { UserService } from './users.service.js';
import { UsersController } from './users.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    // Bind the interface token to the concrete implementation
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    UserService,
  ],
  exports: [UserService],
})
export class UsersModule {}
