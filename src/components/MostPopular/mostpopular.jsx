import React, { Component } from "react";
import "./mostpopular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsHeart } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UnevenSetsFinite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/products")
      .then((response) => {
        this.setState({ products: response.data.slice(8, 16) });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

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
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    };

    return (
      <>
        <section className="mostPopular container">
          <h3>MOST POPULAR</h3>
          <Slider {...settings}>
            {this.state.products.map((product,id) => (
              <Link to={`products/${product.id}`} className="mostPopularCard" id={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <span>{product.price}$</span>
                <button>
                  <BsHeart /> 
                </button>
              </Link>
            ))}
          </Slider>
        </section>
      </>
    );
  }
}
