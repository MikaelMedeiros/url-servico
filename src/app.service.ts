import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá! Eu sou a API que trará as urls de serviços :D';
  }
}
