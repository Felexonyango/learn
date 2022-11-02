import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { GrandParentComponent } from './components/grand-parent/grand-parent.component';
import { HomeComponent } from './components/Home/components/home.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',

  component:HomeComponent,
  redirectTo: 'home',
},
{
  path:'home',
  component: HomeComponent,

},

  {
    path: 'child',
    component:ChildComponent
  },
  {
    path: 'parent',
    component:ParentComponent
  },
  {
    path: 'grandparent',
    component:GrandParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetectionRoutingModule { }
