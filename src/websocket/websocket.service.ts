import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketService{  
    @WebSocketServer()
    private server: Server;

    send_message(message) {
        console.log(message);
        this.server.sockets.emit("device", message);
    }
}
