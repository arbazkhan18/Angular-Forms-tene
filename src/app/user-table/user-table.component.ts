import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  public numbersArray = [];
  public label: number;
  public userInput1: number;
  public userInput2: number;
  public startingNumber: number;
  public endingNumber: number;
  public arr1: number[];
  public arr2: number[];

  onAdd() {

    // this.startingNumber = number1.value;
    // this.endingNumber = number2.value;
    //console.log(this.startingNumber);
    //console.log(this.endingNumber);
    console.log('the entered numbers' + this.startingNumber + ', ' + this.endingNumber);
    this.arr1 = [];
    let i = this.startingNumber;
    while (i <= this.endingNumber) {
      this.arr1.push(i);
      i++;
    }
    this.arr2 = [];
    i = 1;
    while (i < 11) {
      this.arr2.push(i);
      i++;
    }

    this.userInput1 = null;
    this.userInput2 = null;
  }


  constructor() { }

  ngOnInit() { }

}