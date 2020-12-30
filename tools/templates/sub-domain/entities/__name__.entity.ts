import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { __name__ModelState } from '..';

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class __name__Entity extends Document implements __name__ModelState {
  @Prop({ required: true })
  name!: string;

  @Prop({ default: Date.now })
  createdAt!: Date;

  @Prop({ default: Date.now })
  updatedAt!: Date;
}

export const __name__EntitySchema = SchemaFactory.createForClass(
  __name__Entity,
);
