import type { RequestHandler } from "express";
import type { userType } from "../lib/definitions";
import userRepository from "../modules/user/UserRepository";

export const getUserByEmail: RequestHandler = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const { email } = req.body;
    const user: userType | null = await userRepository.readByEmail(email);

    if (!user) {
      res.status(404).json({
        message: "Le couple email / mot de passe est incorrect.",
      });
      return;
    }

    req.body.dbpassword = user.password;

    next();
  } catch (e) {
    console.info(e);
  }
};
