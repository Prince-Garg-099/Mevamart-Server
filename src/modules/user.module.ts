import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers/user.controller';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user.service';

@Module({

  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]

})
export class UserModule { }
