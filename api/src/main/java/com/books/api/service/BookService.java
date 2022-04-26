package com.books.api.service;

import com.books.api.model.Book;
import com.books.api.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public Book createBook(Book book){
        return bookRepository.save(book);
    }

    public Book getBookById(String id) throws Exception {


        return bookRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"The book does not exist"));
    }
    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }
    public Book updateBook(String id,  Book book) throws Exception {
       getBookById(id);
        return bookRepository.save(book);

    }
    public void deleteBook(String id) throws Exception {

        getBookById(id);
        bookRepository.deleteById(id);

    }
}
