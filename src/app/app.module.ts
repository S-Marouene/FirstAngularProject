import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ExerciceComponent } from './component/exercice/exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FirstComponent,
    SecondComponent,
    ExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
