import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketService {
  @WebSocketServer()
  private server: Server;

  send_message(message) {
    this.server.sockets.emit('device', message);
  }
}
