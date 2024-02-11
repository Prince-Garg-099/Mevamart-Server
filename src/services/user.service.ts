import { Model } from 'mongoose';
import { HttpCode, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema,User } from 'src/schemas/user.schema';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { ObjectId } from 'mongodb';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}


  async create(data: any) {

    const newUser = new this.userModel(data);
    return newUser.save();    
  }

  async findByEmail(emailAddress: string): Promise<User | null> {
    return this.userModel.findOne({ emailAddress }).exec();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).exec();
  }

  async updateUser(userId: string, updatedUserData: any): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(userId, updatedUserData, { new: true }).exec();
  }

  async deleteUser(userId: string): Promise<void> {
    // Find the user by ID and delete it from the database
    const deletedUser = await this.userModel.findByIdAndDelete(userId).exec();
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
  }



  // public async finduser(creddata): Promise<any> {

  //   const fuser = await this.userModel.findOne({ email: creddata.email },).exec();

  //   if (!fuser) {
  //     throw new HttpException(" user Not found", 404);
  //   } else {
  //     if (creddata.password != fuser.password) {
  //       throw new HttpException(" password incorrect", 401);
  //     } else {
  //       return fuser;
  //     }
  //   }
  // }


  // async getuserdata(id: any) {
    
  //   const user = await this.userModel.findOne({_id: new ObjectId(id)});

  //   if (!user) {
  //     throw new NotFoundException();
  //   }
  //   console.log(user.name)
  //   return user;
  // }

//  async allusers(){

//   const allusers = await this.userModel.find();
//     console.log(allusers);
//   return allusers;
//  }
  
  
//   public async findandupdate( data): Promise<any> {
    
//     console.log(data._id);
//      await this.userModel.findByIdAndUpdate({ _id: data._id }, { "$set": { "name": data.name, "email": data.email, "contactno": data.contactno}}).exec();
     
//  }
}