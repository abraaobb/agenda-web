import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {UpdateComponent} from "./components/contact/update/update.component";
import {CreateComponent} from "./components/contact/create/create.component";

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'contact/update/:id', component: UpdateComponent},
  {path: 'contact/create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
