import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appHighlightHover]'
})
export class HighlightHoverDirective {
	@HostListener('mouseover')
	onHover() {
		this.elementRef.nativeElement.style.backgroundColor = 'blue';
	}

	@HostListener('mouseleave')
	onmouseleave() {
		this.elementRef.nativeElement.style.backgroundColor = '#e23e3e';
	}

	constructor(private elementRef: ElementRef) {
		// this.elementRef.nativeElement.onmouseover();
		// this.elementRef.nativeElement.style.backgroundColor = 'blue';
		// console.log(this.elementRef);
	}
}
