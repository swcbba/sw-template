import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Partner } from '../../shared/models/partner.model';
import { PartnerService } from './partner.service';

@Component({
  selector: 'sw-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners$: Observable<Partner[]>;

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partners$ = this.partnerService.getAll();
  }

}
