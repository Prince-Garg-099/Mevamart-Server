import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { IsString, IsInt, IsBoolean, IsMongoId } from 'class-validator';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  _id: string;
  
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: props => `${props.value} is not a valid email address!`,
    },
  })
  emailAddress: string;

  @Prop({ required: true })
  password: string;

  @Prop({  })
  gender: string;

  @Prop({ match: /^[0-9]{10}$/, message: 'Contact number must be a valid 10-digit number' })
  contactNumber: string;

  @Prop({ maxlength: 255 })
  profilePhoto: string;

  @Prop({ })
  token: string;

}

export const UserSchema = SchemaFactory.createForClass(User);