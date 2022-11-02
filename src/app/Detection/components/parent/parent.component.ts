import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  status: boolean = false
  public text! : string;

  constructor() {}

  ngOnInit(): void {}
  
  parentClick() {
    console.log('parent called ')
    this.status = !this.status
  }

  onChange(value : string) {
    this.text = value;
    console.log('data emitted')
  }
}
