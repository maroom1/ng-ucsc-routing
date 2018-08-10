import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  // square breackets is used similarly in css declrations so that it ccan identify easily
  selector: '[appAppImageOverlay]'
})
//its the dependency injections it makes it work
export class AppImageOverlayDirective {

  @Input() config:Object;
  // @Input() config:Object={
  //   querySelector:'#detailsList'
  // } 

  // this is an alternative ngClass syntax which we can  use to bind the class.<className> property-- this will work when hovered on the element.
  //multiple bindings can be done
  @HostBinding('class.border-7')
  @HostBinding('class.border-success') private onHoverProp:Boolean;
 // @HostBinding('style.border') private onHoverProp1:String;

  //ElementRef : gives the direct access to the dom element upon which it is attahced
  //Renderer will call the undeline elements and set the info
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.el.nativeElement.style.backgroundColor="red";
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseover') onHover() {
   // console.log("Hovered..!");
    let part = this.el.nativeElement.querySelector('#detailsList');
    this.renderer.setStyle(part,'display','block');
    this.onHoverProp=true;
  } 

  @HostListener('mouseout') onHoverOut() {
   // console.log("Hovered..!");
    let part = this.el.nativeElement.querySelector('#detailsList');
    this.renderer.setStyle(part,'display','none');
    this.onHoverProp=false;
   // this.onHoverProp1='5px solid green';
  } 
}
