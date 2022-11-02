import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss']
})
export class GrandParentComponent implements OnInit {
title ='some'
  constructor() { }

  ngOnInit(): void {
  }

}
