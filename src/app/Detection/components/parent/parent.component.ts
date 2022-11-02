import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Teacher} from '../../model/dummyData'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  teachers: Teacher[] = [
    {name: 'Mr. Deep', subject: 'Angular 6 in DotNet Techy YouTube Channel'},
    {
      name: 'Mr. Gautam',
      subject: 'C#, WEB API in DotNet Techy YouTube Channel',
    },
    {
      name: 'Mr. DotNet Techy',
      subject:
        'High chart, chart js, prime ng, ag grid in DotNet Techy YouTube Channel ',
    },
  ]
  principle = 'Principle'

  constructor() {}

  
  ngOnInit(): void {}
}
