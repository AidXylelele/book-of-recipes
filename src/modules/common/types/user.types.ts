export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  avatar: string;
  date?: Date;
}

export interface IUpdateUserPassword {
  oldPassword: string;
  newPassword: string;
}

export interface IUpdateUserAvatar {
  email: string;
  avatar: string;
}
