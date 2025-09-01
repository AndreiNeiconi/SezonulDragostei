import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

import { DashbordComponent } from './dashbord/dashbord.component';



const routes: Routes = [
  {path:"",component:HomePageComponent},
  { path: "subscribe", component: SubscribePageComponent },
  {path:"about",component:AboutPageComponent},
  //  {path:"dashbord",component:DashbordComponent,canActivate:[AuthGurdService]},
  {path:'dashbord',component:DashbordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
