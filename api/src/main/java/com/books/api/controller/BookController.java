package com.books.api.controller;

import com.books.api.model.Book;
import com.books.api.model.Image;
import com.books.api.repository.ImageRepository;
import com.books.api.service.BookService;
import com.books.api.service.CloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@CrossOrigin()
@RestController
@RequestMapping("/api/book")
@RequiredArgsConstructor

public class BookController {
    private final BookService bookService;
    private final CloudinaryService cloudinaryService;


    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody Book book) throws IOException {
        return new ResponseEntity<>(bookService.createBook(book), HttpStatus.OK);
    }
    @PostMapping(path = "/upload/{id}")
    public  ResponseEntity<?> upload( @RequestPart(value = "multipartFile") MultipartFile multipartFile,@PathVariable String id) throws Exception {
        Map result = cloudinaryService.upload(multipartFile);
        String url = (String) result.get("url");
        Book book = bookService.getBookById(id);
        book.setImg(url);
        bookService.updateBook(book.getId(), book);


        return new ResponseEntity<>(book,HttpStatus.CREATED);
    }


    @GetMapping(path ="/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable String id) throws Exception {
        return new ResponseEntity<>(bookService.getBookById(id), HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<Book>> getAllBooks(){
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteBookById(@PathVariable String id) throws Exception {
        bookService.deleteBook(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping(path = "/{id}")
    public ResponseEntity<Book> updateById(@PathVariable String id, @RequestBody Book book) throws Exception {
        return new ResponseEntity<>(bookService.updateBook(id,book), HttpStatus.OK);
    }


}
