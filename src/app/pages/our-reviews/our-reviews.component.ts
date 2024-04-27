import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardReviewOptions } from 'src/app/components/cards/card-options';

@Component({
  selector: 'app-our-reviews',
  templateUrl: './our-reviews.component.html',
  styleUrls: ['./our-reviews.component.scss'],
  host: {
    class: 'container',
  },
})
export class OurReviewsPage implements AfterViewInit {
  @ViewChild('reviewsElement') reviewsElement?: ElementRef<HTMLDivElement>;
  reviews: CardReviewOptions[] = [
    {
      title: 'Shauna Fontenelli',
      profilePic: '',
      content:
        'Awesome service ! Very detail oriented and the first cleaning service I 100 percent trust not being home during time of cleaning .',
      stars: 5,
    },
    {
      title: 'Tanim Yousuf',
      content: `Great experience using this cleaning service! Very professional, thorough, organized, and on time. Thank you!!`,
      stars: 5,
    },
    {
      title: 'Martina McTighe',
      content: `I had my first cleaning with the Fresh cleaning team today and I was so impressed when i got home. They went above and beyond my expectations. The way they organized little things I wouldn't even think to do and the deep cleaning that i don't myself have the time to do was so great. I'm so happy i found them! I already fell like I don't know what i would do without them!!`,
      stars: 5,
    },
    {
      title: 'Ellen Sherman',
      content: `What a great jog by Karlane and her crew! My house is sparking !! Very professional !!`,
      stars: 5,
    },
    {
      title: 'Komal Patel Murali',
      profilePic: '',
      content: `Excellent cleaning services. Highly Recommend.`,
      stars: 5,
    },
    {
      title: 'Laura Tarlow',
      content: `Very professional, skilled and thorough. It's great to have a team working on the house. Their deep clean is truly exceptional.`,
      stars: 5,
    },
    {
      title: 'Maria Morrison Heningburg',
      profilePic: '',
      content: `The owner is kind, caring, thoughtful and professional. I highly recommend!!`,
      stars: 5,
    },
    {
      title: 'Michael Redwood',
      content: `Great and honest service. They are always on time and she is a great person with a great personality!`,
      stars: 5,
    },
    {
      title: 'Danielle Sandler',
      profilePic: '',
      content: `The best and most thorough cleaning I have ever had. They have been working for me for 3 years. My husband is OCD about a clean and neat house and this is his favorite favorite cleaning service, he is always happy after they have been here.`,
      stars: 5,
    },
    {
      title: 'Katelyn Polhemus',
      content: `Been getting cleaning services for years and this is by far the most reliable and trustworthy service we have ever had. ALways an amazingly clean job with little extra touches - super friendly - we couldn't be happier!! Highly recommend!!`,
      stars: 5,
    },
    {
      title: 'Kathleen Gifford',
      content: `I am always happy to come home to a sparkling clean house! They work well with my husbands & my schedule. Always professional & on time! Highly recomment their services.`,
      stars: 5,
    },
  ];

  next() {
    if (!this.reviewsElement) return;

    const nativeElement = this.reviewsElement.nativeElement;
    const childNodes = nativeElement.childNodes;

    nativeElement.append(childNodes[0]);
  }

  prev() {
    if (!this.reviewsElement) return;

    const nativeElement = this.reviewsElement.nativeElement;
    const childNodes = nativeElement.childNodes;

    nativeElement.prepend(childNodes[childNodes.length - 1]);
  }

  ngAfterViewInit(): void {
    if (!this.reviewsElement) return;

    const nativeElement = this.reviewsElement.nativeElement;
    const childNodes = nativeElement.childNodes;

    childNodes[childNodes.length - 1].remove();
  }
}
