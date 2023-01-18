import { Types, Document } from 'mongoose';

import { MongoUser } from './user.schema';
import { User } from './user.model';

type DBUser = Document<unknown, any, MongoUser> &
  MongoUser & {
    _id: Types.ObjectId;
  } & Required<{
    _id: Types.ObjectId;
  }>;

export const userMapper = {
  fromDB: (dbUser: DBUser): User => {
    return {
      id: dbUser.id,
      socketConnections: dbUser.socketConnections,
    };
  },
};
