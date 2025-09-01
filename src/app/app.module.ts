import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SubscribePageComponent,
    FooterComponent,
    AboutPageComponent,
    LogInPageComponent,
    DashbordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // Initialize Firebase
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAQsC8J0Fd7FI5IbDNeEAcNa6y8fJtVc-U',
      authDomain: 'sezonul-dragostei-854b6.firebaseapp.com',
      databaseURL:
        'https://sezonul-dragostei-854b6-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'sezonul-dragostei-854b6',
      storageBucket: 'sezonul-dragostei-854b6.firebasestorage.app',
      messagingSenderId: '1068303148229',
      appId: '1:1068303148229:web:4fa8d70a97807955127cac',
      measurementId: 'G-0XDKG111E1',
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
