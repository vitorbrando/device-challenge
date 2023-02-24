import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { VariablesModule } from './variables/variables.module';
import { WebsocketService } from './websocket/websocket.service';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), DevicesModule, VariablesModule],
  controllers: [AppController],
  providers: [AppService, WebsocketService],
})
export class AppModule {}
