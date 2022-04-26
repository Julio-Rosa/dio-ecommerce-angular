import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { FiltersComponent } from './components/book-cart/filters/filters.component';

import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import {BooksService} from './components/book-cart/product-list/product-list.service';

import { DashboardPageComponent } from './components/dashboard/dashboard-page/dashboard-page.component';
import { DashboardListBooksComponent } from './components/dashboard/dashboard-list-books/dashboard-list-books.component';
import { DashboardBookItemComponent } from './components/dashboard/dashboard-book-item/dashboard-book-item.component';
import { NewBookFormComponent } from './components/dashboard/new-book-form/new-book-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateBookComponent } from './components/dashboard/update-book-form/update-book/update-book.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './components/shared/alert-modal/alert-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookCartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent,
    DashboardPageComponent,
    DashboardListBooksComponent,
    DashboardBookItemComponent,
    NewBookFormComponent,
    UpdateBookComponent,
  
    AlertModalComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    ModalModule
  ],
  providers: [BooksService,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
