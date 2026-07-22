import './Gallery.css';
import React, { useRef } from 'react';

export default function Gallery(){

const galleryImgRef = useRef(null);

const handleNext = () => {
    if(galleryImgRef.current){
        const slideWidth = galleryImgRef.current.clientWidth;
        galleryImgRef.current.scrollLeft += slideWidth;
    }
};

const handlePrev = () => {
    if(galleryImgRef.current){
        const slideWidth = galleryImgRef.current.clientWidth;
        galleryImgRef.current.scrollLeft -= slideWidth;
    }
};

  return (
<section className="container">
                <div className="gallery-slider" id="gallery">
                    <h3>Gallery:</h3>
                    <button id="prev-btn" className="slider-arrow prev-arrow" onClick={handlePrev}>&#10094;</button>
                    <button id="next-btn" className="slider-arrow next-arrow" onClick={handleNext}>&#10095;</button>
                    <div className="gallery-img" ref={galleryImgRef}>
                        <img id="slide1" src="./images/food1.avif" alt="Dish 1"/>
                        <img id="slide2" src="./images/food2.avif" alt="Dish 2"/>
                        <img id="slide3" src="./images/food3.avif" alt="food"/>
                        <img id="slide4" src="./images/food4.avif" alt="food"/>
                        <img id="slide6" src="./images/food6.avif" alt="food"/>
                        <img id="slide7" src="./images/food7.avif" alt="food"/>
                        <img id="slide8" src="./images/food8.avif" alt="food"/>

                    </div>
                    <div className="slider-nav">
                        <a href="#slide1"></a>
                        <a href="#slide2"></a>
                        <a href="#slide3"></a>
                        <a href="#slide4"></a>
                        <a href="#slide6"></a>
                        <a href="#slide7"></a>
                        <a href="#slide8"></a>
                    </div>
                </div>
            </section>
  );
}