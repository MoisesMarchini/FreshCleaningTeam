export class CardOptions {
  title: string = '';
  content: string = '';
  hideBorder?: boolean = false;
}

export class CardReviewOptions extends CardOptions {
  stars: number = 0;
  profilePic?: string;

  constructor(params?: Partial<CardReviewOptions>) {
    super();
    if (params) Object.assign(this, params);
  }
}

export class CardIconOptions extends CardOptions {
  fontawesomeIconClass: string = '';
  flexDirection?: 'row' | 'column' = 'column';
  swapDirectionAtBreakpoint?: 'md' | 'lg' | 'xl';

  constructor(params?: Partial<CardIconOptions>) {
    super();
    if (params) Object.assign(this, params);
  }
}

export class CardImageOptions extends CardOptions {
  imagePath: string = '';

  constructor(params?: Partial<CardIconOptions>) {
    super();
    if (params) Object.assign(this, params);
  }
}
