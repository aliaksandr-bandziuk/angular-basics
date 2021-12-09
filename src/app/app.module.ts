import { IfnotDirective } from './directives/ifnot.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StyleDirective } from './directives/style.directive'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
