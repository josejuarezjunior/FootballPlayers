import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  selectedPersonIndex: number | undefined;

  listPlayers = [
    { name: 'Cristiano Ronaldo', age: 39, birthPlace: 'Funchal, Portugal' },
    { name: 'Lionel Messi', age: 37, birthPlace: 'Rosário, Argentina' },
    { name: 'Andrea Pirlo', age: 45, birthPlace: 'Flero, Italia' },
    { name: 'Harry Kane', age: 35, birthPlace: 'Walthamstow, Reino Unido' },
    { name: 'Rivaldo Ferreira', age: 52, birthPlace: 'Recife, Brazil' },
    { name: 'Ronaldo Nazário', age: 47, birthPlace: 'Itaguaí, Brazil' }
  ];

  personSelected(index: number) {
    this.selectedPersonIndex = index;
  }
}
