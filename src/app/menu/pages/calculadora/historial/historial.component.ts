import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../../../service/calculadora.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {
  history: string[] = [];
  constructor(private calculadoraService: CalculadoraService) { }
  ngOnInit() {
    this.loadHistory();

    this.calculadoraService.historyUpdates$.subscribe(() => {
      this.loadHistory();
    });
  }
  loadHistory() {
    this.history = this.calculadoraService.getHistory();
  }
  clearHistory() {
    this.calculadoraService.clearHistory();
    this.loadHistory();
  }
}
