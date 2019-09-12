import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // @HostBinding('syle.background') backgrountcolor: string

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color' , 'blue');
  }
  @HostListener('mouseenetr') mouseover( eventdata: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');

  }

  @HostListener('mouseleave') mouseleave( eventdata: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'red');

  }

}
