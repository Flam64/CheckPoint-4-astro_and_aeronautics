import type { ResultSetHeader } from "mysql2/promise";
import db, { type Rows } from "../../../database/client";
import type { userType } from "../../lib/definitions";

class UserRepository {
  async create(user: userType): Promise<number> {
    const { firstname, lastname, email, password } = user;

    const [result] = await db.query(
      "INSERT INTO user (firstname, lastname, email, password, role_id) VALUES (?,?,?,?,?)",
      [firstname, lastname, email, password, 1],
    );

    const returnValue = result as ResultSetHeader;
    return returnValue.insertId;
  }

  async readByEmail(email: string): Promise<userType | null> {
    const [user] = await db.query<Rows>("SELECT * FROM user WHERE email = ?", [
      email,
    ]);

    const result = user as userType[];
    return result.length > 0 ? result[0] : null;
  }
}

export default new UserRepository();
