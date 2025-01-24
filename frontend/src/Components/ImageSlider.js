import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'


function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://www.culibrary.ac.in/assets/images/bnr/banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                  <h1> Today a reader,Tomorrow a Leader</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://www.culibrary.ac.in/assets/images/bnr/banner-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h1 className='h1'> Today a reader,Tomorrow a Leader</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/bookshelves-full-books-library-wooden-shelves-with-huge-pile-different-books_89223-8793.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                    <h1> Today a reader,Tomorrow a Leader</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
