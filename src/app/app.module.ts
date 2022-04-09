import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Intro-to-Angular/car-component/car.component';
import { MyComponent } from './Intro-to-Angular/my-component/my.component';
import { InterPolationComponent } from './Basics/Data-Binding/inter-polation/inter-polation.component';
import { PropertyBindingComponent } from './Basics/Data-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/Data-Binding/event-binding/event-binding.component'

@NgModule({
  declarations: [
    AppComponent,CarComponent,MyComponent, InterPolationComponent, PropertyBindingComponent, EventBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
