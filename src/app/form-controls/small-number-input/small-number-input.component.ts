import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-small-number-input',
  templateUrl: './small-number-input.component.html',
  styleUrls: ['./small-number-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmallNumberInputComponent),
      multi: true
    }
  ]
})
export class SmallNumberInputComponent implements OnInit,ControlValueAccessor {

  //Görünyü bozsada ödeme ekranı için kullanıldı
  @Input() min: number;
  @Input() max: number;
  @Input() placeholder:string;
  
  disabled = false;

  value = 0;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit(): void { }

  increase() {
    if (typeof this.max === 'undefined') {
      this.value++;
      this.onChange(this.value);
    } else if (this.value < this.max) {
      this.value++;
      this.onChange(this.value);
    }
  }

  decrease() {
    if (typeof this.min === 'undefined') {
      this.value--;
      this.onChange(this.value);
    } else if (this.value > this.min) {
      this.value--;
      this.onChange(this.value);
    }
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
