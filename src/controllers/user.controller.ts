import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';



@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Post('register')
  async create(@Body() data: any) {
    try {
      const existingUser = await this.userService.findByEmail(data.emailAddress);

      if (existingUser) {
        return { error: 'User with this email address already exists' };
      }

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Replace the plain password with the hashed one
      const newUser = await this.userService.create({ ...data, password: hashedPassword });

      return { success: true, message: 'User created successfully', user: newUser };
    } catch (error) {
      return { error: 'Failed to create user. Please try again.' };
    }
  }

  @Post('login')
  async login(@Body() loginData: any) {
    try {
      const user = await this.userService.findByEmail(loginData.emailAddress);

      if (!user) {
        return { error: 'User not found' };
      }

      // const isPasswordValid = await bcrypt.compare(loginData.password, user.password);

      // if (!isPasswordValid) {
      //   return { error: 'Incorrect password' };
      // }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id, email: user.emailAddress }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });

      return { success: true, message: 'Login successful', user, token };
    } catch (error) {
      return { error: 'Failed to login. Please try again.' };
    }
  }

  @Get()
  async getAllUsers() {
      try {
          const users = await this.userService.getAllUsers();

          if (!users) {
              return { error: 'Users not found' };
          }

          return { success: true, users };
      } catch (error) {
          return { error: 'Failed to fetch users. Please try again.' };
      }
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    try {
      const user = await this.userService.getUserById(userId);

      if (!user) {
        return { error: 'User not found' };
      }

      return { success: true, user };
    } catch (error) {
      return { error: 'Failed to fetch user. Please try again.' };
    }
  }

  @Put(':id')
  async update(@Param('id') userId: string, @Body() updatedUserData: any) {
    try {
      const existingUser = await this.userService.getUserById(userId);

      if (!existingUser) {
        return { error: 'User not found' };
      }

      // Optionally, validate the data before updating
      // For example, you might check if email is unique if being updated

      // Hash the password if it's included in the update
      if (updatedUserData.password) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      }

      const updatedUser = await this.userService.updateUser(userId, updatedUserData);

      return { success: true, message: 'User updated successfully', user: updatedUser };
    } catch (error) {
      return { error: 'Failed to update user. Please try again.' };
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    try {
      // Call the deleteUser method from the UserService
      await this.userService.deleteUser(userId);
      return { success: true, message: 'User deleted successfully' };
    } catch (error) {
      // Handle any errors that occur during deletion
      return { error: 'Failed to delete user. Please try again.' };
    }
  }
}


