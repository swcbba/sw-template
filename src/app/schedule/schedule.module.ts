import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';
import { CollapsibleModule } from '../shared/directives/collapsible/collapsible.module';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    TranslateModule,
    CollapsibleModule
  ],
  providers: [ScheduleService]
})
export class ScheduleModule {}
