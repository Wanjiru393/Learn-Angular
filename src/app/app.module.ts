import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Intro-to-Angular/car-component/car.component';
import { MyComponent } from './Intro-to-Angular/my-component/my.component';
import { InterPolationComponent } from './Basics/Data-Binding/inter-polation/inter-polation.component'

@NgModule({
  declarations: [
    AppComponent,CarComponent,MyComponent, InterPolationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
