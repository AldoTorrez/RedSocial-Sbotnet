import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(): string{
        return 'este viene desde un servicio'
    }
}
