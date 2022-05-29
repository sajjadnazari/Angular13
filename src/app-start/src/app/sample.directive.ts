import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor="black";
   }

}
