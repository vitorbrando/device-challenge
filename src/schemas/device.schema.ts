import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Device {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: false })
  description: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);