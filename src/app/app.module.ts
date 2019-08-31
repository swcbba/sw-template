import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, LayoutModule, FacebookModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {}
