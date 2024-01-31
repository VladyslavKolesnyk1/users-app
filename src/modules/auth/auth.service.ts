import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/LoginDto';
import { SignUpDto } from './dto/SignUpDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async signUp({ username, password, email }: SignUpDto) {
    const userByUsername = await this.userRepository.findOne({
      where: { username },
    });

    if (userByUsername) {
      throw new BadRequestException('Username already exists');
    }

    const userByEmail = await this.userRepository.findOne({
      where: { email },
    });

    if (userByEmail) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      username,
      password: hashedPassword,
      email,
    });

    user.password = undefined;

    return user;
  }

  async login({ username, password }: LoginDto) {
    const user = await this.userRepository
      .scope('withPassword')
      .findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password');
    }

    console.log('here');

    const token = this.jwtService.sign({ id: user.id });

    return { token };
  }
}
