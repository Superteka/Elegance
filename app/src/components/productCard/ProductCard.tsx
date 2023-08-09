import React from 'react';
import './ProductCardStyle.css'; 

interface IProduct {
  id: number;
  title?: string;
  description?: string;
  img?: string;
  intensity: number
  onClick: (productId: number) => void;
}

const ProductCard: React.FC<IProduct> = ({ id, title, description, img, intensity, onClick }) => {
  const generateIntensity = (intensity: number): any => {
    const maxIntensity = 5;
    const filledBalls = intensity > 0 ? intensity : 0;
    const emptyBalls = maxIntensity - filledBalls; 
  
    const filledBallsArray = Array.from({ length: filledBalls }, (_, index) => (
      <div key={index} className="intensity-ball-card filled" />
    ));
  
    const emptyBallsArray = Array.from({ length: emptyBalls }, (_, index) => (
      <div key={index} className="intensity-ball-card empty" />
    ));
  
    return [...filledBallsArray, ...emptyBallsArray];
  };

  const intensityBalls = generateIntensity(intensity)

  return (
    <div className="product-card">
      <div className="product-card-body">
        <h3 className="product-card-title">{title}</h3>
        <img src={img} alt={title} className="product-card-img" />
        <div className="intensity-card">Itensidade: {intensityBalls}</div>
        <p className="product-card-text">{description}</p>
      </div>
      <button onClick={() => onClick(id)} className="btn btn-primary product-btn">
        Ver Detalhes
      </button>
    </div>
  );
};

export default ProductCard;
