import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
// import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {
    path: "",
    component: AboutComponent,
    
  }
  ,
  // {
  //     path:"",
  //     component:StudentDetailsComponent
  // }
  // , 
  {
    path: 'about1',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule )
  },
  {
    path: 'about2',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule )
  },
  {
    path: 'about3',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule )
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
