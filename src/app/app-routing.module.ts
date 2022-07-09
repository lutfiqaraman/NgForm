import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserSettingsFormComponent} from "./user-settings-form/user-settings-form.component";
import {SimpleformComponent} from "./simpleform/simpleform.component";


const routes: Routes = [
  { path: '', component: UserSettingsFormComponent },
  { path: 'simpleform', component: SimpleformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
