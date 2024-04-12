export class CardOptions {
  title: string = '';
  content: string = '';
  hideBorder?: boolean = false;
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
