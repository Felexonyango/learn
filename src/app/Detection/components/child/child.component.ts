import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() message!:string; 

  @Output() ParentHandler : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

childClick(){
  this.ParentHandler.emit('button clicked');
  console.log('child called')
}

}


