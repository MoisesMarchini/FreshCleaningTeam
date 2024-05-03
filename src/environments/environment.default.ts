export const environmentDefault = {
  defaultWebTitle: 'Fresh Cleaning Team',
  keyWordsSeo: 'Karlane, Long Beach - NJ',

  aboutUsSection: {
    content: [
      `We are a reliable and experienced company providing domestic and commercial
      cleaning services. We are located in Long Branch, NJ and proudly serve
      nearly every city in New Jersey. We know that your home is a place of
      intimacy and security, not only for you, but for everyone who shares this
      unique space. Our team is made up of trained and qualified professionals for
      each type of cleaning. Always focused on details, seeking to meet your needs
      in the best way possible.`,
    ],
  },
  routes: {
    home: 'home',

    gallery: 'gallery',
    cleaningTypes: 'cleaning-types',
    reviews: 'our-reviews',
    faq: 'faq',
    aboutUs: 'about-us',

    termsOfUse: 'terms-of-use',
    privacyPolicy: 'privacy-policy',
  },
  routeHeaders: {
    home: {
      title: 'Home',
      description: '',
      hideHeader: true,
    },
    gallery: {
      title: 'Gallery',
      description: '',
      hideHeader: false,
    },
    cleaningTypes: {
      title: 'Cleaning Types',
      description: '',
      hideHeader: false,
    },
    reviews: {
      title: 'Our Reviews',
      description: '',
      hideHeader: false,
    },
    faq: {
      title: 'FAQ',
      description: '',
      hideHeader: false,
    },
    aboutUs: {
      title: 'About Us',
      description: '',
      hideHeader: false,
    },
    termsOfUse: {
      title: 'Terms of Use',
      description: '',
      hideHeader: false,
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      description: '',
      hideHeader: false,
    },
  },
  socialMediaLinks: {
    Facebook: 'https://www.facebook.com/frescleaningteam',
    Instagram: 'https://www.instagram.com/freshcleaningteam',
    GoogleMaps: 'https://maps.app.goo.gl/1qqjgD8BBRuLFnfy6',
  },
  smsProps: {
    number: '+17327990341',
    body: `Hello! I would like a free estimate`,
  },
  navLinks() {
    return [
      {
        title: 'Gallery',
        route: this.routes.gallery,
      },
      {
        title: 'Cleaning Types',
        route: this.routes.cleaningTypes,
      },
      {
        title: 'Our Reviews',
        route: this.routes.reviews,
      },
      {
        title: 'FAQ',
        route: this.routes.faq,
      },
      {
        title: 'About Us',
        route: this.routes.aboutUs,
      },
    ];
  },
  smsLink() {
    return `sms:${this.smsProps.number}?body=${this.smsProps.body}`;
  },
};
