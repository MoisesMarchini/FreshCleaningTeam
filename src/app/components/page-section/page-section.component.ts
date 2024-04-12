import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from './page-section';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss'],
})
export class PageSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string[] = [];
  @Input() options?: PageSection;
  @Input() reverseOnMobile: boolean = false;

  ngOnInit(): void {
    if (this.options) {
      this.title = this.options.title;
      this.content = this.options.content;
    }
  }
}
