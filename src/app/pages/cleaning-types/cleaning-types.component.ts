import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChildren,
} from '@angular/core';
import { navProps } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-cleaning-types',
  templateUrl: './cleaning-types.component.html',
  styleUrls: ['./cleaning-types.component.scss'],
  host: {
    class: 'container',
  },
})
export class CleaningTypesPage implements AfterViewInit {
  @ViewChildren('section') sections?: ElementRef<HTMLElement>[];
  cleaningTypes: CleaningType[] = [
    {
      title: 'Regular Cleaning',
      services: [
        {
          title: 'Kitchen',
          descriptionList: [
            `Cleaning and sanitation of sinks, countertops and tables`,
            `External cleaning and sanitizing of electrical appliances`,
            `External stove cleaning and sanitizing`,
            `Wet cleaning of all cabinet fronts`,
            `Refrigerator external cleaning and sanitation`,
            `Microwave external cleaning and hygienic cleaning`,
            `Dust cleaning (baseboards, fans, top corners, walls, cabinets, blinds)`,
            `Internal cleaning of glass doors`,
            `Cleaning and sanitizing the floor`,
            `Garbage removal`,
          ],
        },
        {
          title: 'Living and dining room',
          descriptionList: [
            `Cleaning and sanitation of tables and chairs`,
            `Dusting with swiffer (baseboards, fans, upper corners, walls, cabinets, blinds, chandeliers)`,
            `Outside cleaning of cabinet glass doors`,
            `Cleaning and sanitation of the floor`,
            `Cleaning of sofas and armchairs`,
          ],
        },
        {
          title: 'Rooms',
          descriptionList: [
            `Dusting with swiffer (baseboards, fans, upper corners, bedside tables, dressers, blinds, bed headboards, doors and windows)`,
            `Cleaning and sanitizing the floor`,
            `Garbage removal`,
          ],
        },
        {
          title: 'Toilets',
          descriptionList: [
            `Dusting with swiffer (baseboards, light fixtures, upper corners, blinds, closets, doors and windows)`,
            `Cleaning and sanitation of toilets, bath tubs, sinks, mirrors, glass, and countertops`,
            `Cleaning and sanitizing the floor`,
            `Garbage removal`,
          ],
        },
        {
          title: 'Extras',
          descriptionList: [
            `Internal cleaning of refrigerators, stoves, cabinets, microwaves`,
            `Washing / Drying / Putting away dishes`,
            `Furniture Move-in / Move-Out`,
            `Pets`,
            `Organization`,
            `Change of bed clothes`,
          ],
        },
      ],
    },
    {
      title: 'Deep Clean / Spring Cleaning',
      services: [
        // {
        //   title: 'Kitchen',
        //   descriptionList: [
        //     'Cleaning and sanitation of sinks, countertops and tables',
        //     'Internal and external cleaning of electrical appliances',
        //     'Internal and external stove cleaning and sanitizing',
        //     'Internal and external wet cleaning of all cabinets',
        //     'Internal and external cleaning of the refrigerator',
        //     'Internal and external microwave oven cleaning',
        //     'Dust cleaning (baseboards, fans, top corners, walls, cabinets, blinds)',
        //     'Internal and external cleaning of glass doors',
        //     'Cleaning and sanitizing the floor',
        //     'Garbage removal',
        //   ],
        // },
        // {
        //   title: 'Living and dining room',
        //   descriptionList: [
        //     'Cleaning and sanitation of tables and chairs',
        //     'Wet cleaning and dust swiffer (baseboards, fans, top corners, walls, cabinets, blinds, chandeliers)',
        //     'Internal and external cleaning of cabinet glass doors',
        //     'Cleaning and sanitizing the floor',
        //     'Cleaning of sofas and armchairs',
        //   ],
        // },
        // {
        //   title: 'Rooms',
        //   descriptionList: [
        //     'Wet cleaning and dust swiffer (baseboards, fans, upper corners, bedside tables, dressers, blinds, bed headboards, doors and windows)',
        //     'Cleaning and sanitizing the floor',
        //     'Garbage removal',
        //   ],
        // },
        // {
        //   title: 'Bathrooms',
        //   descriptionList: [
        //     'Wet dusting and swiffer cleaning (baseboards, light fixtures, upper corners, blinds, cabinets, doors and windows)',
        //     'Cleaning and sanitizing of toilets, bath tubs, sinks, mirrors, glass, and countertops',
        //     'Cleaning and sanitizing the floor',
        //     'Garbage removal',
        //   ],
        // },
        {
          title: 'Kitchen cleaning',
          descriptionList: [
            'Cleaning and sanitizing sinks, countertops, tables and chairs',
            'Internal and external cleaning and sanitizing of household appliances',
            'Cleaning and sanitizing the inside and outside of the stove',
            'Internal and external wet cleaning of all cupboards',
            'Cleaning and sanitizing the inside and outside of the fridge',
            'Cleaning and sanitizing the inside and outside of microwaves',
            'Dusting (skirting boards, fans, top corners, walls, cupboards, blinds)',
            'Cleaning the inside and outside of glass doors and windows (if possible)',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
          ],
        },
        {
          title: 'Hallway',
          descriptionList: [
            'Damp dusting (skirting boards, walls, fans, top corners, blinds, chandeliers)',
            'Internal and external cleaning of glass doors and windows (if possible)',
            'Cleaning and sanitizing floors',
            'Cleaning and sanitizing stairs and handrails',
          ],
        },
        {
          title: 'Living room and dining room',
          descriptionList: [
            'Damp dusting (skirting boards, walls, fans, top corners, blinds, chandeliers)',
            'Cleaning and sanitizing floors',
          ],
        },
        {
          title: 'Bedrooms',
          descriptionList: [
            'Damp dusting (skirting boards, walls, ceiling fans, top corners, blinds, doors and windows)',
            'Cleaning and sanitizing floors',
          ],
        },
        {
          title: 'Bathrooms',
          descriptionList: [
            'Cleaning damp dust (skirting boards, walls, light fittings, top corners, blinds, inside and outside cupboards, doors and windows)',
            'Cleaning and sanitizing toilets, showers, bathtubs, sinks, mirrors, glass and countertops',
            'Cleaning and sanitizing floors',
            'Garbage removal',
          ],
        },
        {
          title: 'Basement',
          descriptionList: [
            'Cleaning and sanitizing of kitchen / laundry / gym / movie theater',
            'Internal and external wet cleaning of all cupboards',
            'Dusting (stairs, skirting boards, fans, top corners, walls, cupboards, blinds)',
            'Cleaning and sanitizing of toilets, shower, sinks, mirrors, glass and countertops',
          ],
        },
        {
          title: 'Extras',
          descriptionList: [
            'Removing adhesives from windows',
            'Removing leftover grout from tiles',
            'Extra garbage (large and heavy)',
            'Move-in Move-Out of furniture',
          ],
        },
      ],
    },
    {
      title: 'Turn Over Cleaning (Cleaning and Organization)',
      services: [
        {
          title: 'Kitchen',
          descriptionList: [
            'Cleaning and sanitation of sinks, countertops and tables',
            'Internal and external cleaning of electrical appliances',
            'Internal and external stove cleaning and hygienization',
            'Internal and external wet cleaning of all cabinets',
            'Internal and external cleaning of the refrigerator',
            'Internal and external microwave oven cleaning',
            'Dust cleaning (baseboards, fans, upper corners, walls, cabinets, blinds)',
            'Internal and external cleaning of glass doors',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
            'Replacement (paper towels, dishwasher soap, napkins, garbage bags, etc)',
          ],
        },
        {
          title: 'Living and dining room',
          descriptionList: [
            'Cleaning and sanitation of tables and chairs',
            'Dusting with swiffer (baseboards, fans, upper corners, walls, cabinets, blinds, chandeliers)',
            'Outside cleaning of cabinet glass doors',
            'Cleaning and sanitation of the floor',
            'Cleaning of sofas and armchairs',
          ],
        },
        {
          title: 'Rooms',
          descriptionList: [
            'Dusting with swiffer (baseboards, fans, upper corners, bedside tables, dressers, blinds, bed headboards, doors and windows)',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
            'Washing and replacement of bed linens, towels and similar items',
          ],
        },
        {
          title: 'Bathrooms',
          descriptionList: [
            'Dusting with swiffer (baseboards, light fixtures, upper corners, blinds, closets, doors and windows)',
            'Cleaning and sanitizing of toilets, bath tubs, sinks, mirrors, glass, and countertops',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
            'Replacement (toilet paper, soap, shampoo, conditioner, garbage bags, paper towels, bath towels, face towels, carpets)',
          ],
        },
      ],
    },
    {
      title: 'Commercial / Office Cleaning',
      services: [
        {
          title: 'Kitchen',
          descriptionList: [
            'Cleaning and sanitation of sinks, countertops and tables',
            'External cleaning and sanitation of electrical appliances',
            'External stove cleaning and sanitation',
            'Wet cleaning of all cabinet fronts',
            'Refrigerator external cleaning and sanitation',
            'Microwave external cleaning and hygienic cleaning',
            'Dust cleaning (baseboards, fans, top corners, walls, cabinets, blinds)',
            'Internal cleaning of glass doors',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
          ],
        },
        {
          title: 'Bathrooms',
          descriptionList: [
            'Dust swiffer cleaning (baseboards, light fixtures, upper corners, blinds, cabinets, doors and windows)',
            'Cleaning and sanitation of toilets, bath tubs, sinks, mirrors, glass, and countertops',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
          ],
        },
        {
          title: 'Office',
          descriptionList: [
            'Cleaning and sanitation of countertops, tables, chairs',
            'External cleaning and sanitation of electronic devices: computers, printers, telephones, etc',
            'Wet cleaning of all cabinet fronts',
            'Dust cleaning (baseboards, fans, top corners, walls, cabinets, blinds)',
            'Internal cleaning of glass doors',
            'Floor cleaning and sanitizing',
            'Garbage removal',
          ],
        },
      ],
    },
    {
      title: 'Move-in Move-Out Cleaning',
      services: [
        {
          title: 'Kitchen',
          descriptionList: [
            'Cleaning and sanitation of sinks, benches and tables',
            'Internal and external stove cleaning and hygienization',
            'Internal and external wet cleaning of all the cabinets',
            'Internal and external cleaning of the refrigerator',
            'Internal and external microwave oven cleaning',
            'Dust cleaning (baseboards, chandelier, ceiling fans, upper corners, walls, cabinets, blinds)',
            'Internal and external cleaning of glass doors',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
          ],
        },
        {
          title: 'Living and dining room',
          descriptionList: [
            'Wet cleaning and swiffer cleaning (baseboards, ceiling fans, upper corners, walls, cabinets, blinds, chandeliers)',
            'External cleaning of glass doors',
            'Floor cleaning and sanitizing',
          ],
        },
        {
          title: 'Rooms',
          descriptionList: [
            'Wet cleaning and dust swiffer (baseboards, fans, upper corners, doors and windows)',
            'Floor cleaning and sanitation',
            'Garbage removal',
          ],
        },
        {
          title: 'Bathrooms',
          descriptionList: [
            'Wet cleaning and dust swiffer (baseboards, light fixtures, upper corners, blinds, cabinets, doors and windows)',
            'Cleaning and sanitizing of toilets, bath tubs, sinks, mirrors, glass, and countertops',
            'Cleaning and sanitizing the floor',
            'Garbage removal',
          ],
        },
      ],
    },
    // {
    //   title: 'Spring Cleaning',
    //   services: [
    //     {
    //       title: 'Kitchen',
    //       descriptionList: [
    //         'Cleaning and sanitation of sinks, countertops and tables',
    //         'Internal and external cleaning of electrical appliances',
    //         'Internal and external stove cleaning and sanitizing',
    //         'Internal and external wet cleaning of all cabinets',
    //         'Internal and external cleaning of the refrigerator',
    //         'Internal and external microwave oven cleaning',
    //         'Dust cleaning (baseboards, fans, top corners, walls, cabinets, blinds)',
    //         'Internal and external cleaning of glass doors',
    //         'Cleaning and sanitizing the floor',
    //         'Garbage removal',
    //       ],
    //     },
    //     {
    //       title: 'Living and dining room',
    //       descriptionList: [
    //         'Cleaning and sanitation of tables and chairs',
    //         'Wet cleaning and dust swiffer (baseboards, fans, top corners, walls, cabinets, blinds, chandeliers)',
    //         'Internal and external cleaning of cabinet glass doors',
    //         'Cleaning and sanitizing the floor',
    //         'Cleaning of sofas and armchairs',
    //       ],
    //     },
    //     {
    //       title: 'Rooms',
    //       descriptionList: [
    //         'Wet cleaning and dust swiffer (baseboards, fans, upper corners, bedside tables, dressers, blinds, bed headboards, doors and windows)',
    //         'Cleaning and sanitizing the floor',
    //         'Garbage removal',
    //       ],
    //     },
    //     {
    //       title: 'Bathrooms',
    //       descriptionList: [
    //         'Wet dusting and swiffer cleaning (baseboards, light fixtures, upper corners, blinds, cabinets, doors and windows)',
    //         'Cleaning and sanitizing of toilets, bath tubs, sinks, mirrors, glass, and countertops',
    //         'Cleaning and sanitizing the floor',
    //         'Garbage removal',
    //       ],
    //     },
    //   ],
    // },
  ];

  currentSectionOnScreen: string = this.cleaningTypes[0].title;
  get navHeight() {
    return navProps.totalHeight;
  }

  teste = true;

  @HostListener('window:scroll')
  onScroll() {
    this.updateVisibleSection();
  }

  ngAfterViewInit(): void {}

  updateVisibleSection() {
    const viewportTop = window.scrollY;

    if (!this.sections) return;

    // Inicializa a variável que armazenará a seção mais visível
    let closestSectionIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    this.sections.forEach((section, index) => {
      // Calcula a distância entre o topo da seção e o topo da janela de visualização
      const sectionTop = section.nativeElement.offsetTop;
      const distance = Math.abs(sectionTop - viewportTop);

      // Verifica se esta seção está mais próxima do topo da janela de visualização
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSectionIndex = index;
      }
    });

    // Atualiza a seção atualmente visível
    this.currentSectionOnScreen = this.cleaningTypes[closestSectionIndex].title;
  }

  setCurrentItem(cleaningTypeTitle: string) {
    if (this.currentSectionOnScreen == cleaningTypeTitle) {
      this.currentSectionOnScreen = '';
      return;
    }

    this.currentSectionOnScreen = cleaningTypeTitle;
  }

  generateHtmlId(index: number) {
    return this.cleaningTypes[index].title.replaceAll(' ', '-').toLowerCase();
  }

  scrollIntoElement(elementId: string) {
    if (!this.sections) return;

    const element = this.sections.find(
      (el) => el.nativeElement.id === elementId
    );

    if (!element) return;

    const y = element.nativeElement.offsetTop - this.navHeight;

    // element?.nativeElement.scrollIntoView({
    //   behavior: 'smooth',
    // });

    window.scrollTo(0, y);
  }
}

export type CleaningType = {
  title: string;
  services: CleaningTypeService[];
};

export type CleaningTypeService = {
  title: string;
  descriptionList: string[];
};
