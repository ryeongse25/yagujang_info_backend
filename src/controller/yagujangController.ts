import { Request, Response } from "express";
import Yagujang from "../model/yagujang";

export const getYagujang = async (req: Request, res: Response) => {
  const data = await Yagujang.find({ city: req.query.city });
  res.send(data);
};
