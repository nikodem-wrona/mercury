import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from 'src/user';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private userService: UserService) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    await this.userService.CreateUser(client.id);
  }

  async handleDisconnect(client: Socket) {
    await this.userService.DeleteUser(client.id);
  }

  async SendEvent(
    eventName: string,
    eventData: unknown,
    socketsIds: string[],
  ): Promise<void> {
    const connectedSockets = await this.server.sockets.fetchSockets();

    const filteredSockets = connectedSockets.filter((socket) =>
      socketsIds.includes(socket.id),
    );

    filteredSockets.forEach((socket) => {
      socket.emit(eventName, eventData);
    });
  }
}
