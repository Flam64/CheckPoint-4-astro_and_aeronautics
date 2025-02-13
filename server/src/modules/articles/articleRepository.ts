//import { number } from "joi";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { ArticleType } from "../../lib/definitions";

class ArticleRepository {
  async browseAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM article");
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

  async create(book: Omit<Book, "id">) {
    const [startSlot, endSlot] = convertSlotToHoursMinutes(
      book.slot,
      book.slotDuration,
    );

    if (book !== null) {
      const [result] = await databaseClient.query<Result>(
        "INSERT INTO book (user_id, station_id, slot, start_book, end_book) VALUES (?,?,?,?,?)",
        [book.user_id, book.station_id, book.slot, startSlot, endSlot],
      );
      return result.insertId;
    }
  } */
} // end
export default new ArticleRepository();
