import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string = 'green'
  @Input() dStyles!: {border?: string, fontWeight?: string, borderRadius?: string}

  @HostBinding('style.color') elColor = null

  // устанавливаю цвет элемента
  constructor(private el: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.el.nativeElement, 'color', 'blue')
    // el.nativeElement.style.color = 'red'
  }

  // методы onClick, onEnter, onLeave можно называть как угодно
  // просто методы должны существовать для реализации функции
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  // меняю цвет элемента при наведении мыши
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    // альтернативный вариант
    // this.elColor = this.color
  }

  // меняю цвет элемента при уходе мыши
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null)
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
    // альтернативный вариант
    // this.elColor = null
  }
}
