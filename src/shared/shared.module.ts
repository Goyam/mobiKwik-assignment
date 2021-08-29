import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { CreditCardDirective } from './directives/credit-card.directive';
import { NumberOnlyDirective } from './directives/numberOnly.directive';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { CardNumberPipe } from './pipes/cardNumber.pipe';

@NgModule({
  declarations: [
    CreditCardDirective,
    NumberOnlyDirective,
    ConfirmationDialogComponent,
    CardNumberPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [
    CreditCardDirective,
    NumberOnlyDirective,
    ConfirmationDialogComponent,
    CardNumberPipe,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
})
export class SharedModule {}
