import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { ColorChangerDirective } from './directives/color-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PersonComponent,
    PersonDetailComponent,
    ColorChangerDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
