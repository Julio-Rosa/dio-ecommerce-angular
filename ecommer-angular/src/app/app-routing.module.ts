import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { DashboardPageComponent } from './components/dashboard/dashboard-page/dashboard-page.component';
import { NewBookFormComponent } from './components/dashboard/new-book-form/new-book-form.component';
import { UpdateBookComponent } from './components/dashboard/update-book-form/update-book/update-book.component';

const routes: Routes = [
  {path:'', component: BookCartComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'dashboard/new', component: NewBookFormComponent},
  {path: 'dashboard/update/:id', component: UpdateBookComponent},
 
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
