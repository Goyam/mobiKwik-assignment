import { cardDetails } from "./card.model";

export const CARDS: Array<cardDetails> = [
  {
    id: 0,
    card_number: "4143 8765 2346 7564",
    expiry_month: "04",
    expiry_year: "2035",
    cvv: "954"
  },
  {
    id: 1,
    card_number: "3485 9564 2345 9782",
    expiry_month: "03",
    expiry_year: "2031",
    cvv: "254"
  },
  {
    id: 2,
    card_number: "5256 3456 1489 7456",
    expiry_month: "06",
    expiry_year: "2026",
    cvv: "785"
  },
]

export const ids = {
  lastId: 2
}
