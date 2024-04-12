import { Component } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss'],
})
export class GetInTouchComponent {
  sectionOptions: PageSection = {
    title: `Get in Touch`,
    content: [
      `Ready to make your home sparkle? Contact us today to schedule a cleaning or to learn more about our services. We look forward to hearing from you and helping make your home an even more welcoming and comfortable place.`,
    ],
    customRootClass: 'text-center text-muted fw-500',
    customTitleClass: 'text-muted fw-900',
    disableGridCols: true,
  };
}
