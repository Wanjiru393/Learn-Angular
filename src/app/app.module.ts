import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Intro-to-Angular/car-component/car.component';
import { MyComponent } from './Intro-to-Angular/my-component/my.component';
import { InterPolationComponent } from './Basics/Data-Binding/inter-polation/inter-polation.component';
import { PropertyBindingComponent } from './Basics/Data-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/Data-Binding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './Basics/Data-Binding/two-way-data-binding/two-way-data-binding.component';


@NgModule({
  declarations: [
    AppComponent,CarComponent,MyComponent, InterPolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayDataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
