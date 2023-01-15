import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import { NavigatorComponent } from './navigator/navigator.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContentSettingsComponent } from './content-settings/content-settings.component';
import { ContentSignInComponent } from './content-sign-in/content-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContentComponent,
    NavigatorComponent,
    ContentSettingsComponent,
    ContentSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
