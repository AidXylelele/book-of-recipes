import { IUser } from '../types/user.type';
import User from '../models/User';

const { Strategy, ExtractJwt } = require('passport-jwt');
const { PassportStatic } = require('passport');

interface IPayload {
  userId: string;
}
export const applyPassportStrategy = (passport: typeof PassportStatic) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  };
  passport.use(
    new Strategy(options, async (payload: IPayload, done: (a: null, b: IUser | boolean) => any) => {
      const user = await User.findOne({ _id: payload.userId }).select('email id avatar');
      try {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (e) {
        return null;
      }
    })
  );
};
