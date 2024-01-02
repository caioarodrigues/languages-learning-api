import DB from "../classes/DB";
import { LanguagesType } from "../types/languages.type";

export default class BookModel {
  public constructor(
    public title: string,
    public year: number,
    public userId: number,
    public language: "english" | "spanish" | "portuguese",
    public content: string
  ) {
    this.title = title;
    this.year = year;
    this.userId = userId;
    this.language = language;
    this.content = content;
  }

  public static async add(book: BookModel) {
    const newBook = await DB.book.create({
      data: {
        title: book.title,
        year: book.year,
        language: book.language,
        content: book.content,
      },
    });

    return book;
  }

  public static async listAll() {
    const books = await DB.book.findMany();

    return books;
  }

  public static async findById(id: number) {
    const book = await DB.book.findUnique({
      where: {
        id,
      },
    });

    return book;
  }

  public static async findByTitle(title: string) {
    const book = await DB.book.findMany({
      where: {
        title
      },
    });

    return book;
  }

  public static async findByYear(year: number) {
    const book = await DB.book.findMany({
      where: {
        year
      },
    });

    return book;
  }

  public static async findByLanguage(language: LanguagesType) {
    const book = await DB.book.findMany({
      where: {
        language
      },
    });

    return book;
  }

  public static async remove (id: number) {
    const book = await DB.book.delete({
      where: {
        id
      }
    })

    return book;
  }

  public static async update (id: number, book: BookModel) {
    const updatedBook = await DB.book.update({
      where: {
        id
      },
      data: {
        title: book.title,
        year: book.year,
        language: book.language,
        content: book.content,
      }
    })

    return updatedBook;
  }
}
