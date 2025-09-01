import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { FormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';




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



    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
