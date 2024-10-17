import React from 'react';
import './Logout.css';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';

const Logout = () => {
  return (
    <div className="logout-page-container">
      <header className="logout-header">
        <div className="menu-icon">
          <AiOutlineMenu size={28} />
          <span>Menu</span>
        </div>
        <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
      </header>

      <div className="logout-content">
       
        <h2>LOGOUT</h2>
        <p>Deseja realmente encerrar sua sessão?</p>

        <div className="buttons">
          <button className="btn-sim">Sim</button>
          <button className="btn-nao">Não</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;