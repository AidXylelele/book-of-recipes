import {
  IUpdateUserAvatar,
  IUpdateUserPassword,
  IUser,
  IUserSignIn
} from '../common/types/user.types';
import { HttpService } from './http.service';

export class UserService extends HttpService {
  loginUser(user: IUserSignIn) {
    return this.post('user/login', user);
  }
  getUserByToken() {
    return this.get(`user/profile/`);
  }
  createUser(data: IUser) {
    return this.post('user/register', data);
  }
  updateUserAvatar(user: IUpdateUserAvatar) {
    return this.put('user/profile/avatar', user);
  }
  updateUserPassword(data: IUpdateUserPassword) {
    return this.put('user/profile/password', data);
  }
}

export const userService = new UserService();
