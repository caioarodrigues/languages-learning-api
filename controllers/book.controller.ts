import { Request, Response } from "express";
import BookModel from "../models/Book.model";
import { LanguagesType } from "../types/languages.type";

export default class BookController {
  public static async add(req: Request, res: Response) {
    const { book } = req.body;

    try {
      const newBook = await BookModel.add(book);

      return res.json(newBook).status(201);
    }
    catch (err) {
      console.log(err);
      return res.json(err).status(500);
    }
  }

  public static async listAll(req: Request, res: Response) {
    const books = await BookModel.listAll();

    return res.json(books);
  }

  public static async findById(req: Request, res: Response) {
    const { id } = req.params;

    const book = await BookModel.findById(Number(id));

    return res.json(book);
  }

  public static async findByTitle(req: Request, res: Response) {
    const { title } = req.params;

    const book = await BookModel.findByTitle(title);

    return res.json(book);
  }

  public static async findByYear(req: Request, res: Response) {
    const { year } = req.params;

    const book = await BookModel.findByYear(Number(year));

    return res.json(book);
  }

  public static async findByLanguage(req: Request, res: Response) {
    const { language } = req.params;

    const book = await BookModel.findByLanguage(language as LanguagesType);

    return res.json(book);
  }

  public static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { book } = req.body;

    const updatedBook = await BookModel.update(Number(id), book);

    return res.json(updatedBook);
  }

  public static async remove(req: Request, res: Response) {
    const { id } = req.params;

    const book = await BookModel.remove(Number(id));

    return res.json(book).status(204);
  }
}