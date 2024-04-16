export const environmentDefault = {
  defaultWebTitle: 'Fresh Cleaning Team',

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
