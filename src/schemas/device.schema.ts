import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
  toJSON: { virtuals: true },
})
export class Device {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  label: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);

DeviceSchema.virtual('variables', {
  ref: 'Variable',
  localField: '_id',
  foreignField: 'device',
  justOne: false,
});
