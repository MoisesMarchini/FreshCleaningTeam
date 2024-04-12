import { Component } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  host: {
    class: 'container container-md',
  },
})
export class PrivacyPolicyPage {
  sectionOptions: PageSection[] = [
    {
      title: 'Your privacy is important to us',
      content: [
        `Your privacy is important to us. It is Fresh Cleaning Team’s policy to respect your privacy regarding any information we may collect from you across our website, Fresh Cleaning Team, and other sites we own and operate.`,
        `We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.`,
        `We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.`,
        `We don’t share any personally identifying information publicly or with third-parties, except when required to by law.`,
        `Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.`,
        `You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.`,
        `Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: 'Cookie Policy for Fresh Cleaning Team',
      content: [
        `This is the Cookie Policy for Fresh Cleaning Team, accessible from URL https://freshcleaningteam.com/.`,
        `As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or break certain elements of the sites functionality.`,
        `We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.`,
        `You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.`,
        `In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.`,
        `The user undertakes the responsibility to make appropriate use of the contents and information offered on the site with enunciative, but not imitative, behavior:`,
        `A) Not to engage in activities that are illegal or contrary to good faith and public order;`,
        `B) Not to spread propaganda or content of a racist, xenophobic or gambling nature, any type of illegal pornography, terrorist claims or against human rights;`,
        `C) Do not cause damage to physical systems (hardware) and unattainable (software) of Fresh Cleaning Team, its suppliers or third parties, to introduce or disseminate computer viruses or any other hardware or software systems that are capable of causing damage previously mentioned.`,
        `Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
  ];
}
