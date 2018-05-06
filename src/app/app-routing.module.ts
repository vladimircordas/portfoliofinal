import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { MyworkComponent } from './main/mywork/mywork.component';

import { WoodsComponent } from './main/mywork/woods/woods.component';
import { NiteaComponent } from './main/mywork/nitea/nitea.component';
import { MelimayaComponent } from './main/mywork/melimaya/melimaya.component';
import { EscapeplanComponent } from './main/mywork/escapeplan/escapeplan.component';
import { DisneyprincessComponent } from './main/mywork/disneyprincess/disneyprincess.component';
import { OldportfolioComponent } from './main/mywork/oldportfolio/oldportfolio.component';
import { OtherworkComponent } from './main/mywork/otherwork/otherwork.component';

import { ContactComponent } from './main/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full' 
  },
  {
    path: 'intro',
    component: IntroComponent,
    data: { page: 'intro' }
  },
  {
    path: 'main',
    component: MainComponent,
    data: { page: 'main' },
    children: [
    {
      path: 'about',
      component: AboutComponent,
      data: { page: 'about' } 
    },
    {
      path: 'mywork',
      component: MyworkComponent,
      data: { page: 'mywork' },
      children: [
        {path: '', redirectTo: 'woods', pathMatch: 'full'},
        {path: 'woods', component: WoodsComponent},
        {path: 'nitea', component: NiteaComponent},
        {path: 'melimaya', component: MelimayaComponent},
        {path: 'escapeplan', component: EscapeplanComponent},
        {path: 'disneyprincess', component: DisneyprincessComponent},
        {path: 'oldportfolio', component: OldportfolioComponent},
        {path: 'otherwork', component: OtherworkComponent}
      ] 
    },
    {
      path: 'contact',
      component: ContactComponent,
      data: { page: 'contact' } 
    },
    ]}
  ];
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}
