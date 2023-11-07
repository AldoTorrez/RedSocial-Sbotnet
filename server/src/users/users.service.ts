import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(): string{
        return 'este es la respuesta de un servidor basico'
    }
}
