import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../../core/services/language.service';
import { MetricService } from './metric.service';
import { Metric } from '../../shared/models/metric.model';

@Component({
  selector: 'sw-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  metrics$: Observable<Metric[]>;

  constructor(
    private metricService: MetricService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.metrics$ = this.metricService.getAll();
  }
}
