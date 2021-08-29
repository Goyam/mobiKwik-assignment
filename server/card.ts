import { Request, Response } from "express";
import { CARDS, ids } from "./db-data";

/**
 * Method to get all Cards
 * @param req
 * @param res
 */
export function getAllCards(req: Request, res: Response) {
  setTimeout(() => {
    res.status(200).json({payload: Object.values(CARDS)})
  }, 200);
}

/**
 * Method to add new Card
 * @param req
 * @param res
 */
export function addNewCard(req: Request, res: Response) {
  const cardDetail = req.body;
  const cardId = ids.lastId + 1;
  CARDS.push({id: cardId, ...cardDetail});
  ids.lastId += 1;

  setTimeout(() => {
    res.status(200).json({message: "Card added successfully."})
  }, 200);
}

/**
 * Method to delete selected Card
 * @param req
 * @param res
 */
export function deleteCard(req: Request, res: Response) {
  const cardId = +req.params["id"];
  CARDS.splice (CARDS.findIndex((data) => {
    return data.id === cardId;
  }), 1)

  setTimeout(() => {
    res.status(200).json({message: "Card removed successfully."})
  }, 200);
}
