import { Request } from "express";
import UserService from "../services/user.service";
import { decodeToken, genenerateToken } from "../utils/token.util";
import { IUser } from "../types/user.type";

export class UserController {
  static async create(req: Request) {
    const user = await UserService.createUser(req.body);
    return genenerateToken({ email: user.email, userId: user._id });
  }

  static async login(req: Request) {
    const user = await UserService.loginUser(req.body);
    return genenerateToken({ email: user!.email, userId: user!._id });
  }

  static async find(req: Request) {
    const token = req.headers.authorization;
    const data = decodeToken(token!);
    const user = await UserService.findUserById(data.userId);
    return user;
  }

  static async changePassword(
    req: Request<{
      body: { oldPassword: string; newPassword: string; email: string };
    }>
  ): Promise<IUser | null | undefined> {
    const { oldPassword, newPassword, email } = req.body;
    const user = await UserService.changePassword(
      email,
      oldPassword,
      newPassword
    );
    return user;
  }

  static async updateUserAvatar(
    req: Request<{ body: { email: string; avatar: string } }>
  ): Promise<IUser | null> {
    const { body } = req;
    const { email } = body;
    const updatedUser = await UserService.updateUserAvatar(email, body);
    return updatedUser;
  }
}
