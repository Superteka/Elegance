import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api/Api';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import './ProductStyle.css'
import Loading from '../../components/loading/Loading';

interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  intensity: number
}

const Product: React.FC = () => {
  const { slug } = useParams();
  const productId = slug
    
  const [product, setProduct] = useState<IProduct>({
      id: '',
      title: '',
      description: '',
      image: '', 
      intensity: 0
  })
    
  const [elegance, setElegance] = useState([])
    
  const generateIntensity = (intensity: number): any => {
    const maxIntensity = 5;
    const filledBalls = intensity > 0 ? intensity : 0;
    const emptyBalls = maxIntensity - filledBalls; 
  
    const filledBallsArray = Array.from({ length: filledBalls }, (_, index) => (
      <div key={index} className="ball filled" />
    ));
  
    const emptyBallsArray = Array.from({ length: emptyBalls }, (_, index) => (
      <div key={index} className="ball empty" />
    ));
  
    return [...filledBallsArray, ...emptyBallsArray];
  };
      
  const { description, image, intensity, title } = product
  
  const intensityBalls = generateIntensity(intensity)
  
  useEffect(() => {
    Api().then((data: any) => {
      const elegance = data.find((obj: any) => obj.store === 'Elegance');
        
      if (elegance && elegance.products) {
          const product = elegance.products.find((product: any) => product.id === productId);

        if (elegance.products) {
          const filteredProducts = elegance.products.filter((product: any) => product.id !== productId)
          setElegance(filteredProducts)
        }
          
        if (product) { setProduct(product) } 
      }
    });
  }, [productId]);

    return (
      !elegance.length ? (  
        <>
          <Header noProducts title="Produtos" />
          <Loading />
        </>
      ) :
      <>
        <Header title={title} noForm/>  
        
        <div className='container-detail'>
          <div className='content'>
            <img className='detail-img' src={image} alt={title} />           
            <div className='description'>
                {description}
            </div>
            <div className="intensity">{intensityBalls}</div>
          </div>  
        </div>

        <div className='carousel-container'>
          <Carousel elegance={elegance} />
        </div>
      </>
  );
};

export default Product;
