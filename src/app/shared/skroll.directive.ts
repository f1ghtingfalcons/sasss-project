import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[skroll]',
    host: {'(window:scroll)': 'track($event)'}
})
export class SkrollDirective {

    constructor( public el: ElementRef, public renderer: Renderer ) {
        if ( window.innerWidth < 576 )
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'rgba(0,0,0,0.9)');
    }

    track($event: Event) {
        if (  window.innerWidth < 576 )
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'rgba(0,0,0,0.9)');
        else if ( window.scrollY > 50 || window.innerWidth < 576 )
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'rgba(0,0,0,0.6)');
        else
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'rgba(0,0,0,0)');
    }
}
