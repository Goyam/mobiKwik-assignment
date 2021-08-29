import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/shared/component/confirmation-dialog/confirmation-dialog.component';
import { cardDetails } from 'src/shared/models/card.model';
import { AppService } from '../app.service';
import { NewCardFormComponent } from './new-card-form/new-card-form.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  public cards: Array<cardDetails> = []

  constructor(
    private _dialog: MatDialog,
    private _appService: AppService,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCardsList();
  }

  /**
   * Method to get All Cards list
   */
  getCardsList() {
    this._appService.getAllCards().subscribe(resp => {
      this.cards = resp.payload;
    })
  }

  /**
   * Method to Add New Card
   */
  addNewCard() {
    let dialogRef = this._dialog.open(NewCardFormComponent, {
      width: "450px"
    })

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this._appService.addNewCard(data).subscribe(resp => {
          this.openSnackbar(resp.message);
          this.getCardsList();
        })
      }
    })
  }

  /**
   * Method to Delete selected Card
   * @param cardDetails Details of Card to be deleted
   */
  onRemoveCard(cardDetails) {
    let dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      width: "400px",
      data: {
        confirmMessage: "Are you sure you want to delete this card?",
        buttonText: {
          ok: "Ok",
          cancel: "Cancel"
        }
      }
    })

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        // this.cards = this.cards.filter(data => data !== cardDetails);
        this._appService.removeCard(cardDetails.id).subscribe(resp => {
          this.openSnackbar(resp.message);
          this.getCardsList();
        })
      }
    })
  }

  /**
   * Method to open Success message Snackbar
   * @param message Success Message
   */
  openSnackbar(message: string) {
    this._snackbar.open(message, "Ok", {
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ["success-alert"],
      duration: 2000
    });
  }

}
