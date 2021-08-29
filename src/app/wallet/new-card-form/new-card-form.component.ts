import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CONSTANTS } from "../../../shared/constants"

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss']
})
export class NewCardFormComponent implements OnInit {

  public cardForm: FormGroup;
  public constants = CONSTANTS;

  constructor(
    public matDialogRef: MatDialogRef<NewCardFormComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Method to Create Card Form
   */
  createForm() {
    this.cardForm = this._formBuilder.group({
      card_number: [null, [Validators.required, Validators.minLength(19)]],
      expiry_month: [null, Validators.required],
      expiry_year: [null, Validators.required],
      cvv: [null, [Validators.required, Validators.minLength(3)]]
    })
  }

  /**
   * Method to Add New Card
   */
  addCard() {
    this.matDialogRef.close(this.cardForm.value);
  }

}
