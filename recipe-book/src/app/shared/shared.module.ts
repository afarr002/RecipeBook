import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

import { DropdownDirective } from './directives/dropdown.directive';
/*
  dynamically creating alert componenet instead of using ngIf

  import { PlaceholderDirective } from './directives/placeholder.directive';
*/

@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    /*
      dynamically creating alert componenet instead of using ngIf

      PlaceholderDirective,
    */
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    CommonModule,
    DropdownDirective,
    LoadingSpinnerComponent,
    /*
      dynamically creating alert componenet instead of using ngIf

      PlaceholderDirective,
    */
  ],
})
export class SharedModule {}
