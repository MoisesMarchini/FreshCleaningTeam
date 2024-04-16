import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  @Input() hideTitle: boolean = false;
  section: PageSection = {
    title: this.hideTitle == true ? '' : 'About Us',
    content: [
      `We are a reliable and experienced company providing domestic and commercial
      cleaning services. We are located in Long Branch, NJ and proudly serve
      nearly every city in New Jersey. We know that your home is a place of
      intimacy and security, not only for you, but for everyone who shares this
      unique space. Our team is made up of trained and qualified professionals for
      each type of cleaning. Always focused on details, seeking to meet your needs
      in the best way possible.`,
    ],
    disableGridCols: true,
  };

  ngOnInit(): void {
    this.section = {
      title: this.hideTitle == true ? '' : 'About Us',
      content: [
        `We are a reliable and experienced company providing domestic and commercial
        cleaning services. We are located in Long Branch, NJ and proudly serve
        nearly every city in New Jersey. We know that your home is a place of
        intimacy and security, not only for you, but for everyone who shares this
        unique space. Our team is made up of trained and qualified professionals for
        each type of cleaning. Always focused on details, seeking to meet your needs
        in the best way possible.`,
      ],
      disableGridCols: true,
    };
  }
}
