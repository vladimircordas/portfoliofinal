import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { MyworkComponent } from './main/mywork/mywork.component';
import { ContactComponent } from './main/contact/contact.component';


// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { NgxGalleryModule } from 'ngx-gallery';// <----------------- angular-modal-gallery library import
// **************************************************************************


import { WoodsComponent } from './main/mywork/woods/woods.component';
import { NiteaComponent } from './main/mywork/nitea/nitea.component';
import { MelimayaComponent } from './main/mywork/melimaya/melimaya.component';
import { EscapeplanComponent } from './main/mywork/escapeplan/escapeplan.component';
import { DisneyprincessComponent } from './main/mywork/disneyprincess/disneyprincess.component';
import { OldportfolioComponent } from './main/mywork/oldportfolio/oldportfolio.component';
import { OtherworkComponent } from './main/mywork/otherwork/otherwork.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainComponent,
    AboutComponent,
    MyworkComponent,
    ContactComponent,
    WoodsComponent,
    NiteaComponent,
    MelimayaComponent,
    EscapeplanComponent,
    DisneyprincessComponent,
    OldportfolioComponent,
    OtherworkComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkDelayModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
