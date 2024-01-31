import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_ROOT_USER,
  password: process.env.DB_ROOT_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadModels: true,
  synchronize: true,
};
