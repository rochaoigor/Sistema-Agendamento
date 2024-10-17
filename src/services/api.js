import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Altere para a URL do back-end
});

export const login = async (email, senha) => {
  return await api.post('/login', { email, senha });
};
export const fetchAgendamento = () => api.get('/agendamentos'); 