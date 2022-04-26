package com.books.api;

import com.books.api.model.Book;
import com.books.api.repository.BookRepository;
import com.books.api.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

public class ApiApplication {
	@Autowired
	private BookService bookService;
	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
	InitializingBean sendDatabase() {
		return () -> {

			bookService.createBook(new Book("1","Harry Potter and the Order of the Phoenix",34.90,1,"Fiction","https://m.media-amazon.com/images/I/51-SI2+aQ2L.jpg"));
			bookService.createBook(new Book("2","Effective Java 3rd Edition",50.00,2,"Technician","https://m.media-amazon.com/images/P/0134685997.01._SCLZZZZZZZ_SX500_.jpg"));
			bookService.createBook(new Book("3","The Lord of the Rings ",60.00,3,"Fiction","https://m.media-amazon.com/images/P/B007978OY6.01._SCLZZZZZZZ_SX500_.jpg"));
		};
	}
}



