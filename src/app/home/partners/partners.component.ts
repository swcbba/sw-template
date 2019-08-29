import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PartnerService } from './partner.service';
import { Partner } from '../../shared/models/partner.model';
import { BRIEF_URL } from '../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners$: Observable<Partner[]>;
  briefUrl = BRIEF_URL;

  constructor(private partnerService: PartnerService) {}

  ngOnInit() {
    this.partners$ = this.partnerService.getAll();
  }
}
