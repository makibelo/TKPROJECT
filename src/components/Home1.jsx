import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {
  const spccProducts = [
    { id: 1, name: 'We offer best price', imageUrl: 'https://th.bing.com/th/id/OIP.ipWL0KJWCYHXnh7HZprQhQHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7' },
    { id: 2, name: 'explore more product', imageUrl: 'https://th.bing.com/th/id/OIP.nfhN7YTHIBvM3DWw4ARpDwHaEA?w=302&h=180&c=7&r=0&o=5&pid=1.7'},
    // Add more products as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-slider">
      <Slider {...sliderSettings}>
        {spccProducts.map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              {/* Add other product information here */}
            </div>
            <div className="explore-text">Explore More Products</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

