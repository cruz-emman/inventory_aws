import { Router } from "express";
import { getExpenseCategory } from "../controllers/expenseController";

const router = Router();

router.get('/', getExpenseCategory);

export default router