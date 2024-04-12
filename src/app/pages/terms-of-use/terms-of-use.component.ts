import { Component } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
  host: {
    class: 'container container-md',
  },
})
export class TermsOfUsePage {
  sectionOptions: PageSection[] = [
    {
      title: '1. Terms',
      content: [
        `By accessing the website at Fresh Cleaning Team you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '2. Use License',
      content: [
        `Permission is granted to temporarily download one copy of the materials (information or software) on Fresh Cleaning Team’s website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Fresh Cleaning Team website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or ‘mirror’ the materials on any other server. This licence shall automatically terminate if you violate any of these restrictions and may be terminated by Fresh Cleaning Team at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any downloaded materials in your possession whether in electronic or printed format.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '3. Disclaimer',
      content: [
        `The materials on Fresh Cleaning Team’s website are provided on an ‘as is’ basis. Fresh Cleaning Team makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Fresh Cleaning Team does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '4. Limitations',
      content: [
        `In no event shall Fresh Cleaning Team or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fresh Cleaning Team’s website, even if Fresh Cleaning Team or a Fresh Cleaning Team authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '5. Accuracy of materials',
      content: [
        `The materials appearing on Fresh Cleaning Team’s website could include technical, typographical, or photographic errors. Fresh Cleaning Team does not warrant that any of the materials on its website are accurate, complete or current. Fresh Cleaning Team may make changes to the materials contained on its website at any time without notice. However Fresh Cleaning Team does not make any commitment to update the materials.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '6. Links',
      content: [
        `Fresh Cleaning Team has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Fresh Cleaning Team of the site. Use of any such linked website is at the user’s own risk.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '7. Modifications',
      content: [
        `Fresh Cleaning Team may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
    {
      title: '8. Governing Law',
      content: [
        `These terms and conditions are governed by and construed in accordance with the laws of Fresh Cleaning Team and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.`,
      ],
      disableGridCols: true,
      disablePaddingX: true,
    },
  ];
}
