package com.sokuro.imagegallery.repository;

import com.sokuro.imagegallery.entity.ImageGallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author ugk (Sokuro Matsuda)
 * @since 5/31/2021
 */
@Repository
public interface ImageGalleryRepository extends JpaRepository<ImageGallery, Long> {
}
