import React, { useState } from 'react';
import './RedefinirSenha.css';
import { FaLock } from 'react-icons/fa';
import axios from "axios";

function RedefinirSenha() {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/redefinir-senha", {
        senhaAtual,
        novaSenha,
      });
      console.log(response.data); // Ação após a redefinição
    } catch (error) {
      console.error("Erro ao redefinir a senha:", error);
    }
  };

  return (
    <div className="redefinir-senha-container">
      <div className="login-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      

      <div className="teste">
      <h2 className="redefinir-titulo">
        <FaLock />
        Redefinir Senha
      </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="senhaAtual">Senha atual</label>
            <input
              type="password"
              id="senhaAtual"
              placeholder="Senha atual"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="novaSenha">Nova Senha</label>
            <input
              type="password"
              id="novaSenha"
              placeholder="Nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-alterar-senha">Alterar Senha</button>
        </form>
      </div>
    </div>
  );
}

export default RedefinirSenha;