import { PasswordUtil } from '../utils/password.util';
import { IUser } from '../types/user.type';
import { CustomError } from '../middlewares/error.middleware';
import User from '../models/User';

export default class UserService {
  static async createUser(user: IUser): Promise<IUser> {
    user.password = PasswordUtil.hash(user.password);
    const userToCreate = new User(user);
    return userToCreate.save();
  }

  static async findUserByEmail(email: string): Promise<IUser | null> {
    const findUser = await User.findOne({ email });
    return findUser;
  }

  static async findUserById(_id: string): Promise<IUser | null> {
    const findUser = await User.findOne({ _id });
    return findUser;
  }

  static async loginUser(user: IUser): Promise<IUser | null> {
    const findUser = await UserService.findUserByEmail(user.email);

    if (!findUser) {
      throw new CustomError(404, 'Wrong email or password');
    }

    const isPasswordEquals = PasswordUtil.compare(user.password, findUser.password);
    if (!isPasswordEquals) {
      throw new CustomError(404, 'Wrong email or password');
    }
    return findUser;
  }

  static async changePassword(email: string, oldPassword: string, newPassword: string) {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = PasswordUtil.compare(oldPassword, user.password);
      if (!isMatch) {
        throw new Error('Incorrect old password');
      }
      if (oldPassword === newPassword) {
        throw new Error('Use new password');
      }
      const hashedPassword = PasswordUtil.hash(newPassword);
      const updatedUser: IUser | null = await User.findOneAndUpdate(
        { email },
        { password: hashedPassword },
        { new: true }
      );
      return updatedUser;
    }
  }

  static async updateUserAvatar(email: string, body: { avatar: string }): Promise<IUser | null> {
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        avatar: body.avatar,
      },
      { new: true }
    );
    return updatedUser;
  }
}
