import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/schemas/users.schema';
import { UserService } from 'src/services/user.service';

@Controller('')
export class UserController {

    constructor(private userservice: UserService) { }

    @Post('signup')
    async create(@Body() createUserDto: CreateUserDto) {

      this.userservice.create(createUserDto);
    }
    @Post('signin')
    findOne(@Body() createUserDto: CreateUserDto) {
      return this.userservice.finduser(createUserDto);
    }

    // @Put('update')
    // updateOne(@Body() createUserDto: CreateUserDto) {
      
    //   return this.userservice.updateuser(createUserDto);
    // }


    @Get('allusers')
    getallusers(){
      return this.userservice.allusers();
    }
    

    // @Get(':id')
    // getuserdata(@Param('id') id: string) {
    //   console.log("id");

    //   return this.userservice.getuserdata(id);
    // }

  @Put('update')
  update( @Body() CreateUserDto: CreateUserDto) {
    console.log("update");

    return this.userservice.findandupdate( CreateUserDto);
  }



 


    
}
