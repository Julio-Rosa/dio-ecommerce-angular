import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/books.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Book[] = [
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

  ];

@Injectable()


export class BooksService {

  private url = 'http://localhost:8080/api/book';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    

    getBooks() {
      return this.http.get(this.url)

  
    }

}
