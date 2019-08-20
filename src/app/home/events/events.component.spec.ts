import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';

import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
