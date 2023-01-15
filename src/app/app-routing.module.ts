import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {ContentSettingsComponent} from "./content-settings/content-settings.component";
import {ContentSignInComponent} from "./content-sign-in/content-sign-in.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ContentComponent},
  {path: "settings", component: ContentSettingsComponent},
  {path: "sign-in", component: ContentSignInComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
