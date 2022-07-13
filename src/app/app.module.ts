import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import {AppRoutingModule} from "./app-routing.module";
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { ValidateformComponent } from './validateform/validateform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    SimpleformComponent,
    ReactiveformComponent,
    UpdateformComponent,
    ValidateformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
