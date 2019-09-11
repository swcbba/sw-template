import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(module => module.HomeModule)
  },
  // TODO: Enable when it's implemented
  // {
  //   path: 'team',
  //   loadChildren: () =>
  //     import('./team/team.module').then(module => module.TeamModule)
  // },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./schedule/schedule.module').then(module => module.ScheduleModule)
  },
  {
    path: 'faq',
    loadChildren: () =>
      import('./faq/faq.module').then(module => module.FaqModule)
  },
  {
    // TODO: Create a 404 component
    path: '**',
    redirectTo: ''
  }
];

const extraOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
