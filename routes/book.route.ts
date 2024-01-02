import { Router } from "express";
import BookController from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/books/list-all", BookController.listAll);
bookRouter.get("/book/find-by-id/:id", BookController.findById);
bookRouter.get("/book/find-by-title/:title", BookController.findByTitle);
bookRouter.get("/book/find-by-year/:year", BookController.findByYear);
bookRouter.get("/book/find-by-language/:language", BookController.findByLanguage);
bookRouter.post("/book/add", BookController.add);
bookRouter.put("/book/update/:id", BookController.update);
bookRouter.delete("/book/remove/:id", BookController.remove);

export default bookRouter;