import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  @Output() destinationRoute = new EventEmitter<string>();

  onSelect(destination: string) {
    this.destinationRoute.emit(destination);
  }
}
