import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { CountdownComponent } from './countdown.component';
import { CountdownService } from './countdown.service';
import { TwoDigitsTransformPipe } from './two-digits-transform.pipe';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownComponent, TwoDigitsTransformPipe],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [CountdownService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
