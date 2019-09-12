import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { LanguageService } from '../../core/services/language.service';
import { MetricsComponent } from './metrics.component';
import { MetricService } from './metric.service';

const MetricsServiceMock = {
  getAll: () => of([]),
};

describe('MetricsComponent', () => {
  let component: MetricsComponent;
  let fixture: ComponentFixture<MetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricsComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: MetricService, useValue: MetricsServiceMock }, LanguageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
