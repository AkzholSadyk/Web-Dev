import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-my-calculator',
  imports: [FormsModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.css'
})
export class MyCalculatorComponent {

  public first: number=1;
  public second: number=1;

  

  public operations: string[] = ['+', '-', '*', '/'];
  public ako: string='+';
  public result: number | undefined = undefined;


  public calc(){
    switch(this.ako){
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break; 
      case '/':
        this.result = this.first / this.second;
        break;
       
    }
  }
}
