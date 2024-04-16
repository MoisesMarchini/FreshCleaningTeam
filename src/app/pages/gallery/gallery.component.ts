import { Component } from '@angular/core';
import { PageSection } from 'src/app/components/page-section/page-section';
import { getFilenamesArray } from 'src/app/helpers/functions';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryPage {
  private verticalMidPoint = 24;
  private verticalTotal = 49;
  private horizontalTotal = 22;

  getVerticalImages(part2: boolean = false) {
    const limit = part2 ? this.verticalTotal : this.verticalMidPoint;
    const startAt = part2 ? this.verticalMidPoint + 1 : 1;
    const filenames = getFilenamesArray('vertical', limit, 'jpg', startAt);
    const imagesFolder = '/assets/service-photos/';

    return filenames.map((filename) => imagesFolder + filename);
  }

  getHorizontalImages() {
    const filenames = getFilenamesArray(
      'horizontal',
      this.horizontalTotal,
      'jpg'
    );
    const imagesFolder = '/assets/service-photos/';

    return filenames.map((filename) => imagesFolder + filename);
  }
}
