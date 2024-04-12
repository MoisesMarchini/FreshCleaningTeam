import { Component } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss'],
})
export class GetInTouchComponent {
  getInTouch = {
    title: `Get in Touch`,
    content: [
      `Ready to make your home sparkle? Contact us today to schedule a cleaning or to learn more about our services. We look forward to hearing from you and helping make your home an even more welcoming and comfortable place.`,
    ],
  };
}
