const crypto = require('node:crypto');

export class PasswordUtil {
  static salt = 64;

  static hash(password: string) {
    return crypto.scryptSync(password, 'salt', PasswordUtil.salt).toString('hex');
  }

  static compare(password: string, hash: string) {
    const enteredPass = crypto.scryptSync(password, 'salt', 64).toString('hex');
    return enteredPass === hash;
  }
}
