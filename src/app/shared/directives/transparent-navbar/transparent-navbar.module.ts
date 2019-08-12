import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransparentNavbarDirective } from './transparent-navbar.directive';

@NgModule({
  declarations: [TransparentNavbarDirective],
  imports: [CommonModule],
  exports: [TransparentNavbarDirective]
})
export class TransparentNavbarModule {}
