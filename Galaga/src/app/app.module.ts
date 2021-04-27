import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundScreenComponent } from './components/background-screen/background-screen.component';
import { VictoryComponent } from './components/victory/victory.component';
import { DefeatComponent } from './components/defeat/defeat.component';
import { DirectionsComponent } from './components/directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundScreenComponent,
    VictoryComponent,
    DefeatComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
