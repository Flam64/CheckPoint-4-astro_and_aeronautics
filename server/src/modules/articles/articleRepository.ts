//import { number } from "joi";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { ArticleType } from "../../lib/definitions";
import type { PublicationType } from "../../lib/definitions";

class ArticleRepository {
  async browseAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM article ORDER BY date DESC",
    );
    return rows;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM article WHERE id = ?",
      [id],
    );

    return rows as unknown as ArticleType;
  }

  /*
    async readBook(id: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT user_id, station_id, slot, start_book FROM book WHERE station_id = ? AND start_book > NOW()",
      [id],
    );

    return rows as unknown as Book;
  }
*/
  async create(newArticle: Omit<PublicationType, "id">) {
    console.info("Valeur d'article", newArticle.picture);
    if (newArticle !== null) {
      const [result] = await databaseClient.query<Result>(
        "INSERT INTO article (title, content, picture, user_id, category_id) VALUES (?,?,?,?,?)",
        [newArticle.title, newArticle.content, newArticle.picture, 1, 1],
      );
      return result.insertId;
    }
  }
} // end
export default new ArticleRepository();
