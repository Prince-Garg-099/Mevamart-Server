import { Model } from 'mongoose';
import { HttpCode, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema,User } from 'src/schemas/users.schema';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { ObjectId } from 'mongodb';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}


  public async create(newuser: CreateUserDto) {
    const user = await new this.userModel(newuser);
    return user.save();
  }


  public async finduser(creddata): Promise<any> {

    const fuser = await this.userModel.findOne({ email: creddata.email },).exec();

    if (!fuser) {
      throw new HttpException(" user Not found", 404);
    } else {
      if (creddata.password != fuser.password) {
        throw new HttpException(" password incorrect", 401);
      } else {
        return fuser;
      }
    }
  }


  // async getuserdata(id: any) {
    
  //   const user = await this.userModel.findOne({_id: new ObjectId(id)});

  //   if (!user) {
  //     throw new NotFoundException();
  //   }
  //   console.log(user.name)
  //   return user;
  // }

 async allusers(){

  const allusers = await this.userModel.find();
    console.log(allusers);
  return allusers;
 }
  
  
  public async findandupdate( data): Promise<any> {
    
    console.log(data._id);
     await this.userModel.findByIdAndUpdate({ _id: data._id }, { "$set": { "name": data.name, "email": data.email, "contactno": data.contactno}}).exec();
     
 }
}