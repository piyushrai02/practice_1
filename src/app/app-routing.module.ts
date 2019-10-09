import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './lazymodule/config/config.component';
import { StudentDetailsComponent } from './lazymodule/student-details/student-details.component';
//  import { HomeComponent } from './home/home.component';
//  import { IndexComponent } from './index/index.component';
//  import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'config'},
  { path: 'home', component: ConfigComponent},
  { path: 'student', component: StudentDetailsComponent},
  {
    path: 'about',
    loadChildren: () => import('./lazymodule/lazymodule.module').then(mod => mod.LazymoduleModule)
  },

  
  
];


//  const routes:Routes=[
//    {path:'',redirectTo:'config',pathMatch:'full'},
//    {path:'lazymodule',loadChildren:'./lazymodule/lazymodule.module#LazyModule'}
   
//  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
