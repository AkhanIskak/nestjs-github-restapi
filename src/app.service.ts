import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Woadsrld!';
  }
  getUser(): string {
    return 'Iskak Akhan';
  }
}
