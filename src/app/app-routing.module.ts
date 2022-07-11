import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserSettingsFormComponent} from "./user-settings-form/user-settings-form.component";
import {SimpleformComponent} from "./simpleform/simpleform.component";
import {ReactiveformComponent} from "./reactiveform/reactiveform.component";


const routes: Routes = [
  { path: '', component: UserSettingsFormComponent },
  { path: 'simpleform', component: SimpleformComponent },
  { path: 'reactiveform', component: ReactiveformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
