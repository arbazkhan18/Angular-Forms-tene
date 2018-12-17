import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.scss']
})
export class RandomNumbersComponent implements OnInit {
  title = 'UserFormInput'
  
  public result: number
  public enteredNumber: number
  public numberOne: number
  public numberTwo: number
  public matchedCount: number = 0
  public unmatchedCount: number = 0
  public userInput: number = 0
  public randomNumberLowerLimit: number;
  public randomNumberUpperLimit: number;

  onSubmit(form: NgForm) {
    this.enteredNumber = form.value.number;
    if(this.enteredNumber == null)
    return;

    if(this.result == this.enteredNumber){
      this.matchedCount++;
      console.log('values match');
      console.log('total number of matches = '+ this.matchedCount);
    }
     else {
       this.unmatchedCount++
        console.log('values donot match');
        console.log('total number of failed matches = '+ this.unmatchedCount);
      }
     // this.userInput = null;
      this.numberOne = this.updateNumbers();
      this.numberTwo = this.updateNumbers();
      this.multiplyGeneratedRandomNumbers();
  }

  constructor() { }

  ngOnInit() {
    this.randomNumberLowerLimit = 2;
    this.randomNumberUpperLimit = 20;       
    this.numberOne = this.updateNumbers();
    this.numberTwo = this.updateNumbers();
    console.log('this is randomly generated number one:: '+this.numberOne);
    console.log('this is randomly generated number two:: '+this.numberTwo);

    this.multiplyGeneratedRandomNumbers()
      }

      multiplyGeneratedRandomNumbers(){
        this.result = this.numberOne * this.numberTwo;
        console.log('product of these 2 numbers is:: '+this.result);
        return this.result;
      }

      public updateNumbers() {
        console.log('the entered values are: ' + this.randomNumberLowerLimit + ' & ' + this.randomNumberUpperLimit);
        return Math.floor(Math.random() * (1 + this.randomNumberUpperLimit - this.randomNumberLowerLimit)) + this.randomNumberLowerLimit;
      }
      

  }
