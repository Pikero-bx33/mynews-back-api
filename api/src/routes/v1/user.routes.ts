import { Router } from "express";
import { createUser } from "../../controllers/user.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", (req, res) => res.send("Get all users"));


export default router;
