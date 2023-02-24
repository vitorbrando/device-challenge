import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VariableDocument = Variable & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Variable {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true })
  device: string;
}

export const VariableSchema = SchemaFactory.createForClass(Variable);
