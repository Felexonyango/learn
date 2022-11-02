import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Teacher } from '../../model/dummyData';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {


  @Input() teacher!: Teacher;
  @Input('principle') principleName!: string;
 
  constructor() { }

  ngOnInit() {
  }



}


