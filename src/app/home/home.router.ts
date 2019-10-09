import { Route } from "@angular/router";
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from '../index/signup/signup.component';
import { ProductsComponent } from './products/products.component';

export const HomeRoutes:Route[]=[
    {
    path:'',
    component:HomeComponent,
    children:[
        {path:'',component:DashboardComponent},
        {path:'settings', component:SignupComponent},
        {path:'products',component:ProductsComponent}

    ]
}
]