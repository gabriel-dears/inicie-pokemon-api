import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'inicie-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.css']
})
export class NextButtonComponent {
  @Output()
  onClick = new EventEmitter<void>();
}
