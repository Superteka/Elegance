import React, { useEffect, useState } from 'react';
import './HeaderStyle.css';
import logo from './logo.png';
import { Link, useParams } from 'react-router-dom';
import RegisterModal from '../../modals/form/Register';

interface HeaderProps {
  noHome?: boolean;
  noProducts?: boolean;
  noForm?: boolean
  noAbout?: boolean
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ noHome, noProducts, title, noForm, noAbout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = useParams()

  const openModal = (): any => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      setIsModalOpen(false)
    }
  }, [isModalOpen])


  return (
    <div className="header">
      <img src={logo} className="logo" alt="Logo" />
      <h1 className={slug ? 'detail-title' : ''}>{title}</h1>
      <div className="button-container">
        {!noHome && <Link to="/"><button>Início</button></Link>}
        {!noProducts && <Link to="/Products"><button>Produtos</button></Link>}
        {!noForm && <button onClick={openModal}>Cadastro</button>} 
        {!noAbout && <Link to="/About"><button>Sobre</button></Link>}
      </div>

      <RegisterModal isOpen={isModalOpen} />
    </div>
  );
};

export default Header;
