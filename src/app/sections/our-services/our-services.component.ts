import { Component } from '@angular/core';
import { CardImageOptions } from 'src/app/components/cards/card-options';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent {
  cardImages: CardImageOptions[] = [
    {
      title: `Personalized Residential Cleaning Services`,
      content: `At ${environment.defaultWebTitle}, we believe that every home is unique and deserves personalized treatment. We offer a variety of residential cleaning services tailored to your specific needs. From basic cleaning to more detailed services such as window cleaning and carpet washing, we're here to make your home spotless in every corner.`,
      imagePath: '/assets/cards/card (1).jpg',
      hideBorder: true,
    },
    {
      title: `Professional and Reliable Team`,
      content: `Our team consists of trained and trustworthy professionals dedicated to providing the highest standard of service. With experience and attention to detail, our staff ensures that every inch of your home receives the care it deserves. You can trust ${environment.defaultWebTitle} to take care of your home with care and respect.`,
      imagePath: '/assets/cards/card (2).jpg',
      hideBorder: true,
    },
    {
      title: `Commitment to Customer Satisfaction`,
      content: `At ${environment.defaultWebTitle}, your satisfaction is our number one priority. We're committed to exceeding your expectations and ensuring that each visit leaves your home sparkling and you completely satisfied. If you're not 100% happy with the service, we'll do what it takes to make it right. Your peace of mind and confidence are paramount to us.`,
      imagePath: '/assets/cards/card (3).jpg',
      hideBorder: true,
    },
  ];
}
