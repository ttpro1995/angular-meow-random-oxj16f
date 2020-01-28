// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { SimpleComComponent } from './simple-com/simple-com.component';

// @NgModule({
//   imports:      [ 
//     BrowserModule,
//     FormsModule,
//     RouterModule.forRoot([
//       { path: '', component: SimpleComComponent },
//     ])
//   ],
//   declarations: [ AppComponent, HelloComponent, SimpleComComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SimpleComComponent } from './simple-com/simple-com.component';
import { AbcComponent } from './abc/abc.component';


const appRoutes: Routes = [
      { path: 'sim', component: SimpleComComponent },
      { path: 'abc', component: AbcComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SimpleComComponent,
    AbcComponent
  ],
  bootstrap: [ AppComponent],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/