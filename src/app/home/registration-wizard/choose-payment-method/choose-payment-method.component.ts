import { Component } from '@angular/core';

import { SIMPLE_QR_CODE_PATH } from '../../../shared/constants/event-data.constant';

@Component({
  selector: 'sw-choose-payment-method',
  templateUrl: './choose-payment-method.component.html',
  styleUrls: ['./choose-payment-method.component.scss']
})
export class ChoosePaymentMethodComponent {
  simpleQRCodePath = SIMPLE_QR_CODE_PATH;
}
