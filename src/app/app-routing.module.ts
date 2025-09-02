import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

import { DashbordComponent } from './dashbord/dashbord.component';
import { ContactComponent } from './contact/contact.component';
import { PoliticaDeConfidentialitateComponent } from './politica-de-confidentialitate/politica-de-confidentialitate.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'subscribe', component: SubscribePageComponent },
  { path: 'about', component: AboutPageComponent },
  //  {path:"dashbord",component:DashbordComponent,canActivate:[AuthGurdService]},
  { path: 'dashbord', component: DashbordComponent },
  { path: 'contact', component: ContactComponent },
  {path:'politica',component:PoliticaDeConfidentialitateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
