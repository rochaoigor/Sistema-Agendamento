import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        senha,
      });
      console.log(response.data); // Ação após o login
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  // Função para redirecionar para o link do JACAD UNIFAA
  const handleJacadClick = () => {
    window.location.href = "https://faa.jacad.com.br/academico/aluno-v2/login"; // Substitua pelo link correto
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/images/images-removebg-preview.png" alt="Logo" />
      </div>
      <h1>Login</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail / RA</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu E-mail ou RA"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="forgot-password">
          <a href="/RedefinirSenha">Esqueceu a senha? <span>Clique Aqui!</span></a>
        </div>
        <div>
          <button type="submit" className="login-btn">Entrar</button>
        </div>
        <div>
          {/* Adiciona a função onClick para o botão JACAD */}
          <button type="button" className="jacad-btn" onClick={handleJacadClick}> 
            JACAD UNIFAA
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;