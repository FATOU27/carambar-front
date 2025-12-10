import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlagueComponent } from './pages/add-blague/add-blague.component';
import { ListBlagueComponent } from './pages/list-blague/list-blague.component';
import { RandomComponent } from './random/random.component';
import { SearchBlagueComponent } from './pages/search-blague/search-blague.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBlagueComponent,
    ListBlagueComponent,
    RandomComponent,
    SearchBlagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
       FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
