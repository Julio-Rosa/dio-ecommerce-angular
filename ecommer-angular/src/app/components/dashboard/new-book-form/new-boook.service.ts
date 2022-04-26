import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../book-cart/product-list/model/books.model';


@Injectable({
  providedIn: 'root'
})
export class NewBoookService {

  private url = 'http://localhost:8080/api/book'; 

  constructor(private http: HttpClient) { }


  


  createBook(book: Book):Observable<Book>{
    return this.http.post<Book>(this.url,book);
  }

  getById(id: string): Observable<Book>{
    const url = `${this.url}/${id}`;
      return this.http.get<Book>(url);
  }
  updateBook(book:Book): Observable<Book>{
    const url = `${this.url}/${book.id}`;
      return this.http.put<Book>(url, book);
  }
  deleteBook(id:string){
    const url = `${this.url}/${id}`;
    return this.http.delete(url,{observe: 'response'});
  }
  uploadImage(id: string, file: File){
    const url =  `${this.url}/upload/${id}`;
    const formData: FormData = new FormData();
    formData.append('multipartFile', file);
    return this.http.post(url, formData,{
      observe: 'events',
      reportProgress: true,
      
      
      
    });
  }
  

}


