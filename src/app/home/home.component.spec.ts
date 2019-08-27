import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownService } from './countdown/countdown.service';
import { AboutComponent } from './about/about.component';
import { MoreDetailsComponent } from './about/more-details/more-details.component';
import { TwoDigitsTransformPipe } from './countdown/two-digits-transform.pipe';
import { EventsComponent } from './events/events.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerService } from './partners/partner.service';

const partnerServiceMock = {
  getAll: () => of([])
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BannerComponent,
        CountdownComponent,
        AboutComponent,
        MoreDetailsComponent,
        TwoDigitsTransformPipe,
        EventsComponent,
        PartnersComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        CountdownService,
        { provide: PartnerService, useValue: partnerServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
