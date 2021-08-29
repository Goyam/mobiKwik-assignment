import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cardDetails } from "src/shared/models/card.model";
import { ApiService } from "./core/services/api.services";

@Injectable({
  providedIn: "root"
})

export class AppService {

  constructor(
    private _apiService: ApiService
  ) {}

  getAllCards() {
    return this._apiService.get("/api/cards");
  }

  addNewCard(cardDetails: cardDetails) {
    let httpHeaders = new HttpHeaders()
    .append("content-type", "application/json");

    return this._apiService.post("/api/cards/add", cardDetails, httpHeaders);
  }

  removeCard(cardId: number) {
    return this._apiService.delete(`/api/cards/remove/${cardId}`);
  }
}
