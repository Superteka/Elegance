import React from 'react';
import ProductCard from '../productCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import './CarouselStyle.css'

interface IProduct {
    id: string;
    title: string;
    description: string;
    image: string;
    intensity: number;
}
  

const Carousel: React.FC<{elegance: any, settingsProps?: any}> = ({ elegance, settingsProps }) => {
  const navigate = useNavigate()
  const handleOpenDetails = (productId: number): void => {
    navigate(`/Product/${productId}`)
  };

  const settings = {
    dots: settingsProps?.dots || false,
    infinite: true,
    speed: 700,
    slidesToShow: settingsProps?.toShow || 1, 
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
          {elegance.map((product: IProduct) => (
          <div key={product.id}>
            <ProductCard
              id={Number(product.id)}
              title={product.title}
              img={product.image}
              intensity={product.intensity}
              description={product.description}
              onClick={(e) => handleOpenDetails(e)}
            />              
          </div>
          ))}
      </Slider>
    </>
    );
};

export default Carousel;
