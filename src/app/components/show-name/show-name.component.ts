import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css'],
})
export class ShowNameComponent implements OnInit, OnChanges {
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('ShowName -> ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ShowName -> ngOnChanges');
    console.log('ShowName -> ngOnChanges', changes);
  }
}
