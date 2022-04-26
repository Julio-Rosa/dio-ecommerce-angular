import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Book } from '../../book-cart/product-list/model/books.model';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { NewBoookService } from '../new-book-form/new-boook.service';

@Component({
  selector: 'app-dashboard-book-item',
  templateUrl: './dashboard-book-item.component.html',
  styleUrls: ['./dashboard-book-item.component.css']
})
export class DashboardBookItemComponent implements OnInit {
  @Input()
  livro!: Book;
  bookId!: string;
  deleteModalRef!: BsModalRef;
  bsModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  

  constructor(private newBookService: NewBoookService, 
              private router: Router,
              private modalService: BsModalService 
              ) { }

  ngOnInit(): void {
  }

  deleteBook(id: string){
    this.bookId = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal,{class:'modal-sm'});
    console.log(this.bookId);
  }


  onConfirmDelete(){
    this.newBookService.deleteBook(this.bookId).subscribe(()=> {
      
      this.deleteModalRef.hide();
      this.handleError("O livro foi deletado com sucesso!","success");
      setTimeout(function(){
        window.location.reload();
      }, 2000);
      
     
      
    }, error => {
      this.handleError("Erro ao deletar o livro!","danger");
      this.deleteModalRef.hide();
      
    })
  }
  onDeclineDelete(){
    this.deleteModalRef.hide();
  }

  handleError(message: string, type: string){
    this.bsModalRef = this.modalService.show(AlertModalComponent);  
    this.bsModalRef.content.type = type
    this.bsModalRef.content.message = message

  }



  

}
