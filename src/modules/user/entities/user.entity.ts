import {
  Column,
  DefaultScope,
  Model,
  Table,
  Scopes,
} from 'sequelize-typescript';

@DefaultScope(() => ({
  attributes: { exclude: ['password'] },
}))
@Scopes(() => ({
  withPassword: {
    attributes: {
      include: ['password'],
    },
  },
}))
@Table({
  tableName: 'user',
  timestamps: true,
})
export class User extends Model {
  @Column({ allowNull: false })
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}
