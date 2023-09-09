import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {

  expression: any = '';
  result: any;
  display: any = '';
  addToExpression(data:any){
this.expression = this.expression + data;
this.display = this.expression
console.log(this.expression);

  }
  calculateResult(){
    this.result = eval(this.expression);
    this.display = this.result
    console.log(this.result);
    
  }
  clearScreen(){
    this.expression = '';
    this.result = ''
    this.display =''
  }
}
