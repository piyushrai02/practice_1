import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
// import { ConfigComponent } from "./config/config.component";
import { LazyRoutingModule } from "./lazymodule-routing.module";
// import { StudentDetailsComponent } from './student-details/student-details.component';
// import { About1Component } from './about/about1/about1.component';
// import { LoginComponent } from "./login/login.component";
// import { StudentDetailsComponent } from "./student-details/student-details.component";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, LazyRoutingModule]
})
export class LazymoduleModule {
  constructor(){
    console.log("about is loaded")
  }
}
