import { Directive, OnInit, ElementRef } from '@angular/core';

import { Collapsible } from 'materialize-css';

@Directive({
  selector: '[swCollapsible]'
})
export class CollapsibleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Collapsible.init(this.elementRef.nativeElement);
  }
}
