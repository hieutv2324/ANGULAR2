import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { NgforofComponent } from './components/ngforof/ngforof.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    HomeComponent,
    DatabindingComponent,
    NgforofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
