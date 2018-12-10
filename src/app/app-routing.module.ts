import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { EditUserComponentComponent } from './edit-user-component/edit-user-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponentComponent },
  { path: 'edit-user', component: EditUserComponentComponent },
  { path: 'list-user', component: ListUserComponentComponent },
  { path: '', component: ListUserComponentComponent }
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
