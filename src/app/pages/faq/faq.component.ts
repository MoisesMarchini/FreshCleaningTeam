import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  host: {
    class: 'container',
  },
})
export class FaqPage {
  cards = [
    {
      title: `Which cleaning supplements do you use?`,
      body: `We have a list of the best products, but each client provides what they prefer to use in their home.`,
    },
    {
      title: `How much do you do you charge per hour?`,
      body: `We don't work by the hour, we always make a package according to each client's needs.`,
    },
    {
      title: `What are your opening days and times?`,
      body: `Our regular opening hours are Monday to Friday, from 7 am to 6 pm. but we also have on-call teams who are able to assist our customers during weekends, holidays and also before 7 am and after 6 pm.`,
    },
    {
      title: `Do you work in teams?`,
      body: `Yes, we work in teams to serve as many clients as possible.`,
    },
    {
      title: `Do you work from home with pets?`,
      body: `Yes, we love animals, but in order to protect them and our employees from any accidents, we advise you to keep them away from the team when cleaning.`,
    },
    {
      title: `Do you work under contract? `,
      body: `Our contract works as a guide. explaining everything about our services and policies. clients are free to leave whenever they wish, we just ask that you notify us in advance of any changes previously agreed.`,
    },

    {
      title: `Is the company insured?`,
      body: `Yes, we are insured and licensed to give our clients greater security.`,
    },
    {
      title: `What are the payment methods? `,
      body: `We currently accept cash, check, zelle and verno.`,
    },
    {
      title: `Do you run promotions?`,
      body: `Yes, we have various promotions and draws throughout the year. Follow our <a href='${environment.socialMediaLinks.Instagram}' class='text-decoration-underline' target='_blank'>instagram</a> to take part and keep up to date with all the latest news.`,
    },
  ];

  expandAll = false;
  currentCardIndex = -1;

  setCard(index: number) {
    this.currentCardIndex = this.currentCardIndex === index ? -1 : index;
  }
}
