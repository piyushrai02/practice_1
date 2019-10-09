import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
