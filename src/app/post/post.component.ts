import { Post } from './../app.component';
import {
  Component,
  EventEmitter,
  ContentChild,
  Input,
  OnInit,
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Output,
  ChangeDetectionStrategy,
  ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  @Input() post!: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  constructor() { }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: ', this.ngOnInit);
    console.log(this.infoRef.nativeElement);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: ', this.ngDoCheck);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ', this.ngAfterContentInit);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ', this.ngAfterContentChecked);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ', this.ngAfterViewInit);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ', this.ngAfterViewChecked);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: ', this.ngOnDestroy);

  }

}
