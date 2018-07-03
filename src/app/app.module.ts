import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PrincipalPage } from '../pages/principal/principal';

import { MyApp } from './app.component';
import { ContactProvider } from '../providers/contact/contact';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAf8twZXD-0eIoXPlbJ6ScBcXEM7SDybQQ",
      authDomain: "epe2-6d92d.firebaseapp.com",
      databaseURL: "https://epe2-6d92d.firebaseio.com",
      projectId: "epe2-6d92d",
      storageBucket: "epe2-6d92d.appspot.com",
      messagingSenderId: "463303010991"

    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider
  ]
})
export class AppModule {}
