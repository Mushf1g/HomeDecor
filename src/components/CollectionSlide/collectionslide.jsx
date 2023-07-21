import React, { Component } from 'react'
import "./collectionslide.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import collectionsData from "../../data/collections.json";


import Collectionitem from '../CollectionItem/collectionitem';

export default class UnevenSetsFinite extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                  }
                }
              ]
        };
  return (
    <>
        <section className='collectionSlide'>
            <div className='collectionSlideTop container'>
                <h3 className='container'>COLLECTIONS</h3>
                <Link to="/Collections">SEE&nbsp;&nbsp;ALL</Link>
            </div>
            <Slider {...settings} className='container'>
                {collectionsData.map((collection) => (
                  <Collectionitem key={collection.id} img={collection.image} name={collection.name} />
                ))}
            </Slider>
        </section>
    </>
  );
}

}