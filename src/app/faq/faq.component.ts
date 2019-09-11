import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { FAQ_SLIDES_URL } from '../shared/constants/event-data.constant';

@Component({
  selector: 'sw-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqSlides: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.faqSlides = this.sanitizer.bypassSecurityTrustResourceUrl(
      FAQ_SLIDES_URL
    );
  }
}
