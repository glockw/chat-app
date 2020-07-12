import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRowLength]'
})
export class RowLengthDirective {
defaultHeigth:string;
@HostListener('keydown')
checkInput(target){

const element = this.element.nativeElement;
if(element.value.length < 10){
  element.style.height = this.defaultHeigth;
  return;
}
 element.style.height = element.scrollHeight  + 'px';

//  const actual =  this.element.nativeElement.rows;
//  this.element.nativeElement.rows = actual + 1;
}
  constructor(private element: ElementRef<HTMLTextAreaElement>) {

   this.defaultHeigth =  this.element.nativeElement.style.height;
  }

}
