import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetectionRoutingModule } from './detection-routing.module';
import { ChildComponent } from './components/child/child.component';
import { GrandParentComponent } from './components/grand-parent/grand-parent.component';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/Home/components/home.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,  
    GrandParentComponent,

    ChildComponent,
     ParentComponent


  ],
  imports: [
    CommonModule,
    DetectionRoutingModule,
    FormsModule
  ]
})
export class DetectionModule { }
