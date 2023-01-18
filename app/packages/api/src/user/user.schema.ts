import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SocketConnection } from './user.model';

export type UserDocument = HydratedDocument<MongoUser>;

@Schema({ collection: 'users' })
export class MongoUser {
  @Prop({ type: [mongoose.Schema.Types.Map], required: true })
  socketConnections: SocketConnection[];
}

export const UserSchema = SchemaFactory.createForClass(MongoUser);
