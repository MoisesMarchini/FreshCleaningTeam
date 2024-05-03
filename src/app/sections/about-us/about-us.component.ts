import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  @Input() hideTitle: boolean = false;
  section: PageSection = {
    title: this.hideTitle == true ? '' : 'About Us',
    content: environment.aboutUsSection.content,
    disableGridCols: true,
  };

  ngOnInit(): void {
    this.section = {
      title: this.hideTitle == true ? '' : 'About Us',
      content: environment.aboutUsSection.content,
      disableGridCols: true,
    };
  }
}
