import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskdisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
