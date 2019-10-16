import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from './services/user.service';
import { LoginPage } from './login/login.page';





@NgModule(
  {
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule
    ],
    providers: [
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      UserService
    ],
    bootstrap: [AppComponent]
  })
export class AppModule { }
