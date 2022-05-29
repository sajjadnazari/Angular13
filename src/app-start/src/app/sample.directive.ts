import { Directive ,ElementRef,HostBinding,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {
 @HostBinding('style.backgroundColor') backgroundColor : string ="transparent";
  constructor(private elementRef:ElementRef,private render:Renderer2) {

   }
   @HostListener('mouseenter') onMouseOver(){
     this.backgroundColor ='red';
   }
   @HostListener('mouseleave') onMouseOut(){
    this.backgroundColor ='black';
  }
}
