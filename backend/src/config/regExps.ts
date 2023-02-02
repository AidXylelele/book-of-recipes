export class RegExps {
  static password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  static email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}
