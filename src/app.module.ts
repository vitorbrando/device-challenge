import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), DevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
