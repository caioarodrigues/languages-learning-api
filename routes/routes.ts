import { Router } from "express";
import bookRouter from "./book.route";

const routes = Router();

routes.use(bookRouter);

export default routes;