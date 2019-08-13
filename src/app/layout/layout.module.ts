import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavDirective } from './navbar/sidenav.directive';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavDirective],
  imports: [CommonModule, TranslateModule],
  exports: [NavbarComponent, FooterComponent]
})
export class LayoutModule {}
