import { Component } from '@angular/core';
import { CardImageOptions } from 'src/app/components/cards/card-options';
import { PageSection } from 'src/app/components/page-section/page-section';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  sections: { [key: string]: PageSection } = {
    cleaningServices: {
      title: `Specialized Cleaning Services`,
      content: [
        `In addition to our standard cleaning services, we offer specialized solutions to address unique needs. Whether it's post-construction cleanup, move-in/move-out cleaning, or deep cleaning for special occasions, we have the expertise and resources to handle any cleaning challenge.`,
      ],
    },
    cleaningProcess: {
      title: `Our Cleaning Process`,
      content: [
        `At ${environment.defaultWebTitle}, we follow a meticulous cleaning process to ensure that every corner of your home receives the attention it deserves. From dusting and vacuuming to sanitizing and polishing, our comprehensive approach leaves your home fresh, clean, and inviting.`,
      ],
    },
    environmentFriendly: {
      title: `Environmentally Friendly Practices`,
      content: [
        `We care about your home and the planet. That's why we prioritize environmentally friendly cleaning products and practices. Our eco-conscious approach ensures that your home is not only clean but also safe for your family and the environment.`,
      ],
    },
  };
}
