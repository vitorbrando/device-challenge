import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Device, DeviceSchema } from 'src/schemas/device.schema';
import { Variable, VariableSchema } from 'src/schemas/variables.schema';
import { WebsocketService } from 'src/websocket/websocket.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Device.name,
        schema: DeviceSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Variable.name,
        schema: VariableSchema,
      },
    ]),
  ],
  controllers: [DevicesController],
  providers: [DevicesService, WebsocketService],
})
export class DevicesModule {}
