import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOneComponent } from './components/card-one/card-one.component';
import { CardTwoComponent } from './components/card-two/card-two.component';
import { CardThreeComponent } from './components/card-three/card-three.component';
import { CardFourComponent } from './components/card-four/card-four.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
