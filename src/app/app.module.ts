import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from "./app.router";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import {Routes} from '@angular/router';
// import { AboutComponent } from './lazymodule/about/about.component';
import { HttpClientModule } from "@angular/common/http";
import { ConfigComponent } from './lazymodule/config/config.component';
import { StudentDetailsComponent } from './lazymodule/student-details/student-details.component';
import { LoginComponent } from './lazymodule/login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
// import { NoPageComponent } from './no-page/no-page.component';
// import { HomeModule } from './home/home.module';
// import { IndexModule } from './index/index.module';
 const appRoutes:Routes = [
   {
     path: '',
     redirectTo: '/config',
     pathMatch: 'full'
   },
   {
     path: 'register',
     component: RegisterComponent
   },
  //  {
  //    path: 'about',
  //    component: AboutComponent
  //  },
   {
     path: 'config',
     component: ConfigComponent
   },
  {
   path: 'studentDetail',
   component: StudentDetailsComponent
  },
   {
     path: 'login',
     component: LoginComponent
   }
 ]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    // AboutComponent,
    ConfigComponent,
   StudentDetailsComponent,
    LoginComponent,
    // IndexComponent,
    // HomeComponent,
    // NoPageComponent
  ],
  
  imports: [
     RouterModule.forRoot(
      
     
      appRoutes,
      { enableTracing: true ,},
     
     ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HomeModule,
    // IndexModule,
    
      
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
