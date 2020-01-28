import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleComComponent } from './simple-com/simple-com.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SimpleComComponent },
    ])
  ],
  declarations: [ AppComponent, HelloComponent, SimpleComComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
