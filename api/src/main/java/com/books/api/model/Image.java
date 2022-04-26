package com.books.api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String imageUrl;
    private String publicId;

    public Image( String imageUrl, String publicId) {
        this.imageUrl = imageUrl;
        this.publicId = publicId;
    }
}