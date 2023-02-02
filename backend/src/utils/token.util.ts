import jwt from "jsonwebtoken";

type Data = {
  userId: string;
  email: string;
};

export const genenerateToken = (encodeData: Data): string => {
  const token = jwt.sign(encodeData, `${process.env.JWT_SECRET}`, {
    expiresIn: `${process.env.JWT_EXPIRATION}`,
  });
  return `Bearer ${token}`;
};

export const decodeToken = (token: string): any => {
  token = token.replace("Bearer ", "");
  const data = jwt.verify(token, `${process.env.JWT_SECRET}`);
  return data;
};
