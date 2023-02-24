import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketService{  
    @WebSocketServer()
    private server: Server;

    updated_device(message) {
        this.server.sockets.emit("event-devices", message);
    }

    information_received(message) {
        this.server.sockets.emit("event-devices", message);
    }
}
