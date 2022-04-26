import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from '../../book-cart/product-list/product-list.service';


@Component({
  selector: 'app-dashboard-list-books',
  templateUrl: './dashboard-list-books.component.html',
  styleUrls: ['./dashboard-list-books.component.css']
})
export class DashboardListBooksComponent implements OnInit {

  livros: any;
  booksService: BooksService;

  constructor(bookService : BooksService) {
    this.booksService = bookService;
   }

  ngOnInit(): void {
    this.livros = this.booksService.getBooks().subscribe((data => {
      this.livros = data;
      
    }))
  }
  

}
