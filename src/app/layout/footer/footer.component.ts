import { Component } from '@angular/core';

@Component({
  selector: 'sw-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
