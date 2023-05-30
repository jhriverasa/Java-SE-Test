package com.jhriverasa.app.utility;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

import java.time.LocalDateTime;

@Data
@MappedSuperclass // Act as a blueprint for any class annotated with @Entity that extends this
public abstract class AbstractEntityTimeStamps {

    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}