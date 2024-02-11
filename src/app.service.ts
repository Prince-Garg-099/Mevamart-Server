import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'hello, Welcome to the world of APIs';
  }
}
