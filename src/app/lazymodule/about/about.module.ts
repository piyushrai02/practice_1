import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About1Component } from './about1/about1.component';
import { AboutRoutingModule } from './about-routing.module';
import { About2Component } from './about2/about2.component';
import { About3Component } from './about3/about3.component';



@NgModule({
  declarations: [About1Component, About2Component, About3Component],
  imports: [
    CommonModule,AboutRoutingModule
  ]
})
export class AboutModule { }
