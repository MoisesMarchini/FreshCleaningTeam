import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  template: ` <ng-container *ngIf="routerLink">
      <a
        [routerLink]="routerLink"
        [target]="target"
        [class]="
          'btn fw-600 px-3 d-flex align-items-center justify-content-center w-100 gap-2 rounded-1 btn-' +
          btnClass()
        "
      >
        <i *ngIf="!!fontawesomeIcon" [class]="fontawesomeIcon"></i>
        <span
          *ngIf="!!label"
          [class]="hideLabelOnMobile ? 'd-none d-md-inline' : ''"
        >
          {{ label }}
        </span>
        <ng-content></ng-content>
      </a> </ng-container
    ><ng-container *ngIf="href">
      <a
        [href]="href"
        [target]="target"
        [class]="
          'btn fw-600 px-3 d-flex align-items-center justify-content-center w-100 gap-2 rounded-1 btn-' +
          btnClass()
        "
      >
        <i *ngIf="!!fontawesomeIcon" [class]="fontawesomeIcon"></i>
        <span
          *ngIf="!!label"
          [class]="hideLabelOnMobile ? 'd-none d-md-inline' : ''"
        >
          {{ label }}
        </span>
        <ng-content></ng-content>
      </a>
    </ng-container>
    <ng-container *ngIf="!routerLink && !href" #buttonTemplate>
      <button
        [type]="type"
        [disabled]="disabled"
        (click)="onClick()"
        [class]="
          'btn fw-600 px-3 d-flex align-items-center justify-content-center w-100 gap-2 rounded-1 btn-' +
          btnClass()
        "
      >
        <i *ngIf="!!fontawesomeIcon" [class]="fontawesomeIcon"></i>
        <span
          *ngIf="!!label"
          [class]="hideLabelOnMobile ? 'd-none d-md-inline' : ''"
        >
          {{ label }}
        </span>
        <ng-content></ng-content>
      </button>
    </ng-container>`,
})
export class DefaultButtonComponent {
  @Input() label: string = '';
  @Input() type: 'submit' | 'button' = 'button';
  @Input() fontawesomeIcon: string = '';
  @Input() outline: boolean = false;
  @Input() bsColor: string = 'primary';
  @Input() customClass: string = '';
  @Input() disabled: boolean = false;
  @Input() hideLabelOnMobile: boolean = false;
  @Input() routerLink?: string;
  @Input() href?: string;
  @Input() target: '_self' | '_blank' = '_self';
  @Output() _onClick: EventEmitter<any> = new EventEmitter<any>();

  btnClass() {
    return (
      (this.outline ? 'outline-' : '') + this.bsColor + ' ' + this.customClass
    );
  }

  onClick() {
    this._onClick.emit();
  }
}
