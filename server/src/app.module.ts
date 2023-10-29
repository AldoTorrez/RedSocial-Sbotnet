import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'mysql',
    password: '/Barcoder123',
    database: 'Sbotnet',
    models: []
  }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
