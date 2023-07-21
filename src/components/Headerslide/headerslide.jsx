import React, { Component } from 'react'
import "./headerslide.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import headerslide1 from "../../assets/images/headerslide-1.jpg"
import headerslide2 from "../../assets/images/headerslide-2.jpg"
import headerslide3 from "../../assets/images/headerslide-3.jpg"
import headerslide4 from "../../assets/images/headerslide-4.jpg"

export default class UnevenSetsFinite extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
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
        <section className='headerSlide container'>
            <Slider {...settings}>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide1} alt="" />
                    </div>
                    <p>SOFAS</p>
                    <span></span>
                </div>
                <div  className='headerSlideItem'>
                    <div>
                        <img src={headerslide2} alt="" />
                    </div>
                    <p>BEDS&nbsp;AND&nbsp;HEADBOARDS</p>
                    <span></span>
                </div>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide3} alt="" />
                    </div>
                    <p>RUGS</p>
                    <span></span>
                </div>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide4} alt="" />
                    </div>
                    <p>CUSHIONS</p>
                    <span></span>
                </div>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide1} alt="" />
                    </div>
                    <p>SOFAS</p>
                    <span></span>
                </div>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide2} alt="" />
                    </div>
                    <p>BEDS&nbsp;AND&nbsp;HEADBOARDS</p>
                    <span></span>
                </div>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide3} alt="" />
                    </div>
                    <p>RUGS</p>
                    <span></span>
                </div>
                <div className='headerSlideItem'>
                    <div>
                        <img src={headerslide4} alt="" />
                    </div>
                    <p>CUSHIONS</p>
                    <span></span>
                </div>
            </Slider>
        </section>
    </>
  );
}

}