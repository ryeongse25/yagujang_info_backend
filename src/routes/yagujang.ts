import express from "express";
import { getYagujang } from "../controller/yagujangController";

const router = express.Router();

router.get("/", getYagujang);

export default router;
