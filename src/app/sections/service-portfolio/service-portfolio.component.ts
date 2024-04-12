import { Component } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';
import { getFilenamesArray } from 'src/app/helpers/functions';

@Component({
  selector: 'app-service-portfolio',
  templateUrl: './service-portfolio.component.html',
  styleUrls: ['./service-portfolio.component.scss'],
})
export class ServicePortfolioComponent {
  sectionOptions: PageSection = {
    title: 'Service Portfolio',
    content: ['Explore some of Our Cleaning Works'],
  };

  getVerticalImages() {
    const filenames = getFilenamesArray('vertical', 20, 'jpg');
    const imagesFolder = '/assets/service-photos/';

    return filenames.map((filename) => imagesFolder + filename);
  }
}
