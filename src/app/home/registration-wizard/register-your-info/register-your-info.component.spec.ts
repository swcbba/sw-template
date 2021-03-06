import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { RegisterYourInfoComponent } from './register-your-info.component';

describe('RegisterYourInfoComponent', () => {
  let component: RegisterYourInfoComponent;
  let fixture: ComponentFixture<RegisterYourInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterYourInfoComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterYourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
