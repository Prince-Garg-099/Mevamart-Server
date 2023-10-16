import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { IsString, IsInt, IsBoolean, IsMongoId } from 'class-validator';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  
  @IsString()
  @IsMongoId()
  _id: string;
   
  @Prop()
  name: string;

  @Prop({  })
  password: String;

  @Prop({})
  email: String;

  @Prop()
  gender: String;

  @Prop()
  address: String;

  @Prop()
  contactno: String;

  @Prop()
  picture: string;

}

export const UserSchema = SchemaFactory.createForClass(User);