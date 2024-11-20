import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop()
  name: string

  @Prop()
  email: string

  @Prop()
  password?: string; // No será necesario si es una cuenta de Google

  @Prop({ default: false })
  isGoogleAccount: boolean; // Indica si el usuario se registró con Google
}

export const UserSchema = SchemaFactory.createForClass(User)