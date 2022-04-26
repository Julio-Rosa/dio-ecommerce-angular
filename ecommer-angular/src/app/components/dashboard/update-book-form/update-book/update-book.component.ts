import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Book } from 'src/app/components/book-cart/product-list/model/books.model';
import { AlertModalComponent } from 'src/app/components/shared/alert-modal/alert-modal.component';
import { NewBoookService } from '../../new-book-form/new-boook.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book!: Book; 
  bookForm!: FormGroup
  bookImage!: File;
  bsModalRef!: BsModalRef;
  progress = 0;
  
  constructor(private newBookService: NewBoookService, private router: Router, private activatedRoute: ActivatedRoute,private modalService: BsModalService) { 
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

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
     if (id != null) {
      this.newBookService.getById(id).subscribe( book => {
        this.book = book;
    });
     }

  }

  updateBook(): void{
    if(this.bookForm.invalid){
      return;
    }else{
      this.book.name = this.name.value
      this.book.quantity = this.quantity.value
      this.book.price = this.price.value
      this.book.category = this.category.value
      this.newBookService.updateBook(this.book).subscribe(() => {
         if(this.bookImage === undefined){
            this.handleError("Livro atualizado com sucesso!","success");
            this.router.navigate(['/dashboard']);
         }else{
           this.newBookService.uploadImage(this.book.id as string, this.bookImage).subscribe((event: HttpEvent<Object>)=>{
            if(event.type === HttpEventType.Response){
              this.handleError("O livro foi salvo com sucesso!", "success");
              this.router.navigate(['/dashboard']);
             
             
             
               
            }else if(event.type === HttpEventType.UploadProgress) {
                const percent = Math.round((event.loaded * 100)/ event.total!);
                this.progress = percent;
              }
           }, error => {
            this.handleError("Erro ao atualizar o livro","danger");
           })
         }
      }, error => {
        this.handleError("Erro ao atualizar o livro","danger");
      });
    }
  }
  cancel(): void{
    this.router.navigate(['/dashboard']);
  }
  handleError(message: string, type: string){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type
    this.bsModalRef.content.message = message

  }
 

}
