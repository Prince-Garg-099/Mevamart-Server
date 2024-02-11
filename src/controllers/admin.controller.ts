import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AdminService } from 'src/services/admin.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';



@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) { }


    @Post('login')
    async login(@Body() loginData: any) {
        try {

            if (loginData.emailAddress === 'admin@mevamart.com' && loginData.password === 'Admin@123') {

                const token = jwt.sign({ role: 'admin', email: loginData.emailAddress }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
                return { success: true, message: 'Admin login successful', token };
            } else {
                return { error: 'Invalid credentials' };
            }
        } catch (error) {
            return { error: 'Failed to login. Please try again.' };
        }
    }


 

    @Delete(':id/delete')
    async delete(@Param('id') userId: string) {
        try {
            const deletedUser = await this.adminService.deleteUser(userId);

            if (!deletedUser) {
                return { error: 'User not found or failed to delete' };
            }

            return { success: true, message: 'User deleted successfully', user: deletedUser };
        } catch (error) {
            return { error: 'Failed to delete user. Please try again.' };
        }
    }
}
