import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss']
})
export class GrandParentComponent implements OnInit {

  status: boolean = false
  public text! : string;

  constructor() {}

  ngOnInit(): void {}
  
  
  buttonClick() {
    
    this.status = !this.status
  }

}
