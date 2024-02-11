import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { IsString, IsInt, IsBoolean, IsMongoId } from 'class-validator';


export type UserDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {


}

export const AdminSchema = SchemaFactory.createForClass(Admin);