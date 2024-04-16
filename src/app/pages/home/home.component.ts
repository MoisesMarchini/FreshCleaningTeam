import { Component } from '@angular/core';
import {
  CardIconOptions,
  CardImageOptions,
} from 'src/app/components/cards/card-options';
import { PageSection } from 'src/app/components/page-section/page-section';
import { SectionCardOverImageOptions } from 'src/app/components/section-card-over-image/section-card-over-image.component';
import { getFilenamesArray } from 'src/app/helpers/functions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage {
  cardOverImageOptions: SectionCardOverImageOptions[] = [
    {
      markUp: 'Mark-Up',
      title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
      body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam
      recusandae nisi eum eaque perspiciatis rerum odio dicta. Exercitationem
      quia deleniti dolorum maxime obcaecati non ratione. Dolor, voluptatum.
      Recusandae!`,
      imagePath: '1.jpg',
    },
    {
      markUp: 'Mark-Up',
      title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
      body: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam
      recusandae nisi eum eaque perspiciatis rerum odio dicta. Exercitationem
      quia deleniti dolorum maxime obcaecati non ratione. Dolor, voluptatum.
      Recusandae!`,
      imagePath: '2.jpg',
    },
  ];
  cardIcons: CardIconOptions[] = [
    {
      title: `Personalized Residential Cleaning Services`,
      content: `At ${environment.defaultWebTitle}, we believe that every home is unique and deserves personalized treatment. We offer a variety of residential cleaning services tailored to your specific needs. From basic cleaning to more detailed services such as window cleaning and carpet washing, we're here to make your home spotless in every corner.`,
      flexDirection: 'column',
      // swapDirectionAtBreakpoint: 'lg',
      fontawesomeIconClass: 'fa-solid fa-broom',
    },
    {
      title: `Professional and Reliable Team`,
      content: `Our team consists of trained and trustworthy professionals dedicated to providing the highest standard of service. With experience and attention to detail, our staff ensures that every inch of your home receives the care it deserves. You can trust ${environment.defaultWebTitle} to take care of your home with care and respect.`,
      flexDirection: 'column',
      // swapDirectionAtBreakpoint: 'lg',
      fontawesomeIconClass: 'fa-solid fa-broom',
    },
    {
      title: `Commitment to Customer Satisfaction`,
      content: `At ${environment.defaultWebTitle}, your satisfaction is our number one priority. We're committed to exceeding your expectations and ensuring that each visit leaves your home sparkling and you completely satisfied. If you're not 100% happy with the service, we'll do what it takes to make it right. Your peace of mind and confidence are paramount to us.`,
      flexDirection: 'column',
      // swapDirectionAtBreakpoint: 'lg',
      fontawesomeIconClass: 'fa-solid fa-broom',
    },
  ];
}
