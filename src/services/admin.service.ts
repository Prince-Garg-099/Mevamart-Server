import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin} from 'src/schemas/admin.schema';

@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

    


    // async getAllUsers(): Promise<Admin[]> {
    //     return this.adminModel.find().exec();
    //   }

    async deleteUser(userId: string): Promise<Admin | null> {
        return this.adminModel.findByIdAndDelete(userId).exec();
      }
}