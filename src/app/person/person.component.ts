import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input({ required: true, alias: 'personName' }) personName: string = '';
  @Input({ required: true, alias: 'personBirthPlace' }) personBirthPlace: string = '';
  @Input({ required: true, alias: 'personAge' }) personAge: number = 0;
  @Input({ required: true, alias: 'personIndex' }) personIndex: number = 0;
  @Input({ required: true, alias: 'isOdd' }) isOdd: boolean = false;
  @Input({ required: true, alias: 'isFirst' }) isFirst: boolean = false;
  @Input({ required: true, alias: 'isLast' }) isLast: boolean = false;
  @Input({ required: true, alias: 'isSelected' }) isSelected: boolean = false;

  @Output('personSelected') personSelectedEmitter =  new EventEmitter<number>();

  personSelect() {
    this.personSelectedEmitter.emit(this.personIndex);
  }
}
