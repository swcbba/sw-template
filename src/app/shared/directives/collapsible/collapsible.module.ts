import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapsibleDirective } from './collapsible.directive';

@NgModule({
  declarations: [CollapsibleDirective],
  imports: [CommonModule],
  exports: [CollapsibleDirective]
})
export class CollapsibleModule {}
