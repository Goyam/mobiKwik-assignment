import * as express from "express";
import { Application } from "express";
import { getAllCards, addNewCard, deleteCard } from "./card";


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/cards').get(getAllCards);
app.route('/api/cards/add').post(addNewCard);
app.route('/api/cards/remove/:id').delete(deleteCard);

const httpServer: any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
})
