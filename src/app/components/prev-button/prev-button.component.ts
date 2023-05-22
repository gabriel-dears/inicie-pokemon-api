import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'inicie-prev-button',
  templateUrl: './prev-button.component.html',
  styleUrls: ['./prev-button.component.css']
})
export class PrevButtonComponent {
  @Output()
  onClick = new EventEmitter<void>();
}
