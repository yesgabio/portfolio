import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOneComponent } from './components/card-one/card-one.component';
import { CardTwoComponent } from './components/card-two/card-two.component';
import { CardThreeComponent } from './components/card-three/card-three.component';
import { CardFourComponent } from './components/card-four/card-four.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PersonalComponent } from './pages/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent,
    HomeComponent,
    ContentComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
