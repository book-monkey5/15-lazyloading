import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    /*BS*/path: '',/*BE*/
    redirectTo: 'create',
    /*BS*/pathMatch: 'full'/*BE*/
  },
  {
    /*BS*/path: 'create',/*BE*/
    component: BookCreateComponent,
  },
  {
    /*BS*/path: 'edit/:isbn',/*BE*/
    component: BookEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
