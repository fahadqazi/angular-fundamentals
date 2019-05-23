import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsList } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBar } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent, EventsList, EventThumbnailComponent, NavBar
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
