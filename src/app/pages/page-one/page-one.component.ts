import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
})
export class PageOneComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name: string = 'John Doe';

  seconds: number = 0;

  timerSubscription!: Subscription;

  constructor() {
    console.log('PageOne -> constructor');
  }

  ngOnInit(): void {
    console.log('PageOne -> ngOnInit');
    this.timerSubscription = interval(1000).subscribe((i) => {
      this.seconds = i;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PageOne -> ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('PageOne -> ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('PageOne -> ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('PageOne -> ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('PageOne -> ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('PageOne -> ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('PageOne -> ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }

  save() {}
}
