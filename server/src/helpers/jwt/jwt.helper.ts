import jwt from "jsonwebtoken";
import type { userType } from "../../lib/definitions";

export const encodeJWT = async (payload: userType) => {
  const { email, firstname } = payload;

  const obj = { email, firstname };

  return jwt.sign(obj, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
