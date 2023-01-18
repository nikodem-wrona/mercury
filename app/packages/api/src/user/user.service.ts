import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { MongoUser, UserDocument } from './user.schema';
import { User } from './user.model';
import { userMapper } from './user.mapper';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(MongoUser.name)
    private userModel: Model<UserDocument>,
  ) {}

  async CreateUser(socketId: string) {
    await this.userModel.create({
      socketConnections: [
        {
          socketId,
        },
      ],
    });
  }

  async DeleteUser(socketId: string) {
    await this.userModel.deleteOne({
      socketConnections: { $elemMatch: { socketId: { $eq: socketId } } },
    });
  }

  async GetAllUsers(): Promise<User[]> {
    const results = await this.userModel.find();
    return results.map(userMapper.fromDB);
  }
}
