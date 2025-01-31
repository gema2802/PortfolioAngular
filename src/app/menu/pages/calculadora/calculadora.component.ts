import { Component } from '@angular/core';

import { CalculadoraService } from '../../../service/calculadora.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  display: string = '0';

  constructor(private calculadoraService: CalculadoraService) { }

  clear() {
    this.display = '0';
  }
  backspace() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }
  append(value: string) {
    if (this.display === '0' && value !== '.') {
      this.display = value;
    } else {
      this.display += value;
    }
  }
  calculate() {
    try {
      const expression = this.display;
      const result = eval(expression).toString();
      this.calculadoraService.addHistory(`${expression} = ${result}`);
      this.display = result;
    } catch (error) {
      this.display = 'Error';
    }
  }


}
