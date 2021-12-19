import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective{
  @Input() appShowPassword: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.type="text"
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.type="password"
  }
}
