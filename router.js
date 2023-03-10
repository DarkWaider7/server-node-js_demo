import { Router } from "express";
import gameController from "./gameController.js";
const router = new Router();

router.post("/games", gameController.create);
router.get("/games", gameController.getAll);
router.get("/games/:id", gameController.getOne);
router.put("/games", gameController.update);
router.delete("/games/:id", gameController.delete);

export default router;
