export type UserId = string;

export type SocketConnection = Map<'socketId', string>;

export class User {
  id: UserId;
  socketConnections: SocketConnection[];
}
