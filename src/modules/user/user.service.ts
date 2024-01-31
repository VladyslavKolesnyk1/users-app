import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  getUsers() {
    return this.userRepository.findAll();
  }

  async createUser({ username }: CreateUserDto) {
    const userExists = await this.userRepository.findOne({
      where: { username },
    });

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    return this.userRepository.create({ username });
  }
}
