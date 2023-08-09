import React, { useEffect, useState } from 'react';
import Api from '../../api/Api';
import Header from '../../components/header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsStyle.css'
import Carousel from '../../components/carousel/Carousel';
import Loading from '../../components/loading/Loading';

interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  intensity: number;
}

interface IElegance {
  id: string;
  store: string;
  products: IProduct[];
}

const settings = {
  dots: true,
  toShow: 3
}

const Products: React.FC = () => {
  const [eleganceProducts, setEleganceProducts] = useState([]);
      
  useEffect(() => {
    Api().then((data) => {
      const elegance = data?.find((obj: IElegance) => obj?.store === 'Elegance');
  
      if (elegance) {
        setEleganceProducts(elegance?.products);
      } else {
        setEleganceProducts([]);
      }
    });
  }, []);

  return (
    !eleganceProducts.length ? (  
      <>
        <Header noProducts title="Produtos" />
        <Loading />
      </>
    ) :
    <>
      <Header noProducts title="Produtos" />
      <div className='procuts-container'>
        <Carousel elegance={eleganceProducts} settingsProps={settings} />
      </div>
    </>
    );
};

export default Products;
