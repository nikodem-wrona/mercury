import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { MongoUser, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MongoUser.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [UserService],
  exports: [
    UserService,
    MongooseModule.forFeature([{ name: MongoUser.name, schema: UserSchema }]),
  ],
})
export class UserModule {}
