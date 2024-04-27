import { Component } from '@angular/core';
import { CardIconOptions } from 'src/app/components/cards/card-options';
import { SectionCardOverImageOptions } from 'src/app/components/section-card-over-image/section-card-over-image.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage {
  cardOverImageOptions: SectionCardOverImageOptions[] = [
    {
      markUp: '',
      title: `Keeping your home clean and organized is good for the health of your body and mind!`,
      body: `A clean and organized place increases our levels of pleasure and relaxation, providing better results in all areas of our lives.`,
      imagePath: '1.jpg',
    },
    {
      markUp: '',
      title: `You and your family deserve this experience of self-care and well-being!`,
      body: ``,
      imagePath: '2.jpeg',
    },
  ];
  cardIcons: CardIconOptions[] = [
    {
      title: `Personalized Residential Cleaning Services`,
      content: `At ${environment.defaultWebTitle}, we believe that every home is unique and deserves personalized treatment. We offer a variety of residential cleaning services tailored to your specific needs. From basic cleaning to more detailed services, we're here to make your home spotless in every corner.`,
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
