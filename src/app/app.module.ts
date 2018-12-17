import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatExpansionModule, MatOptionModule, MatChipsModule, MatTableModule} from '@angular/material';
import { FormsModule, NgForm, FormGroup  } from '@angular/forms';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { UserTableComponent } from './user-table/user-table.component';


@NgModule({
  declarations: [
    AppComponent,
    RandomNumbersComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatExpansionModule, MatOptionModule, MatChipsModule, MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
