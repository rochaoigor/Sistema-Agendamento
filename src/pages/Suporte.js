import React from 'react'; 
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';
import './Suporte.css';

const Suporte = () => {
  return (
    <div className="page-container">
      <header className="suporte-header">
        <div className="menu-icon">
          <AiOutlineMenu size={28} />
          <span>Menu</span>
        </div>
        <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
        <div className="logout-icon">
          <AiOutlineLogout size={28} />
          <span>Sair</span>
        </div>
      </header>

      <h2>Suporte</h2>
      <p>Precisa de Ajuda? Escolha um canal e envie sua mensagem!</p>

      <div className="support-options">
        <div className="support-option">
          <AiOutlineMail size={70} />
          <div className="support-details">
            <span>E-mail</span>
            <button>Enviar Mensagem</button>
          </div>
        </div>
        <div className="support-option">
          <AiOutlineWhatsApp size={70} />
          <div className="support-details">
            <span>Whatsapp (08:00 às 17:00)</span>
            <button>Enviar Mensagem</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suporte;