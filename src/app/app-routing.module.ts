import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./team/team.module').then(module => module.TeamModule)
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then(module => module.ScheduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
