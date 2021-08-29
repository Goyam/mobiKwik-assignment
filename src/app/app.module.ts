import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { CardComponent } from './wallet/card/card.component';
import { NewCardFormComponent } from './wallet/new-card-form/new-card-form.component';



@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    CardComponent,
    NewCardFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
