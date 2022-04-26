import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Book } from '../../book-cart/product-list/model/books.model';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { NewBoookService } from './new-boook.service';

@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})
export class NewBookFormComponent implements OnInit {

   book: Book = {
     name: '',
     price: 0,
     quantity: 0,
     category: '',
     img: ''
   }

  bookForm!: FormGroup
  bookImage!: File;
  bookId!: string;
  bsModalRef!: BsModalRef;
  progress = 0;


  constructor(private newBookService: NewBoookService, private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      image: new FormControl(''),
    })
    
    
  }

  get name(){
    return this.bookForm.get('name')!;
  }
  get price(){
    return this.bookForm.get('price')!;
  }
  get category(){
    return this.bookForm.get('category')!;
  }
  get quantity(){
    return this.bookForm.get('quantity')!;
  }
 
  onFileSelected(event: any){
    this.bookImage =  event.target.files[0];
  }
  
  
    newBook(){
      if(this.bookForm.invalid){
        return;
      }else{
        this.book.name = this.name.value
        this.book.quantity = this.quantity.value
        this.book.price = this.price.value
        this.book.category = this.category.value
        
       
       

        this.newBookService.createBook(this.book).subscribe( book => {
              let id = book.id as string;
             
                 
                  this.newBookService.uploadImage(id,this.bookImage).subscribe((event: HttpEvent<Object>) => {

                      if(event.type === HttpEventType.Response){
                        this.handleError("O livro foi salvo com sucesso!", "success");
                        this.bookForm.reset();
                         
                      }else if(event.type === HttpEventType.UploadProgress) {
                          const percent = Math.round((event.loaded * 100)/ event.total!);
                          this.progress = percent;
                        }
                                           
                  
              }, error => {
                this.handleError("Erro ao salvar o livro!","danger");
              })
                
              
        }, error => {
          this.handleError("Erro ao salvar o livro!","danger");
        })
      }
    }

  

    

  cancel(){
    this.router.navigate(['/dashboard'])
  }

  handleError(message: string, type: string){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type
    this.bsModalRef.content.message = message

  }


}
