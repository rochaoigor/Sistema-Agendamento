import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Reagendamento.css';
import { FaClock } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';

const Reagendamento = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('08:00');

    const handleSubmit = (e) => {
        e.preventDefault();
        const [hours, minutes] = selectedTime.split(":");
        const reagendamentoDate = new Date(selectedDate);
        reagendamentoDate.setHours(hours, minutes);

        // Envio da data/hora para a API
        console.log("Data e Hora do Reagendamento:", reagendamentoDate);
    };

    return (
        <div className="page-container">
            <header className="agendamento-header">
                <div className="menu-icon">
                    <AiOutlineMenu size={28} />
                    <span>Menu</span>
            
                </div>
                <img className="logo" src="/images/images-removebg-preview.png" alt="Logo" />
               
            </header>

            <h2>Reagendamento de Avaliações</h2>
            <form onSubmit={handleSubmit} className="calendario">
                <label>Disciplina:</label>
                <select>
                    <option>Disciplina 1</option>
                    <option>Disciplina 2</option>
                </select>

                <label>Selecione a Data:</label>
                <Calendar onChange={setSelectedDate} value={selectedDate} />

                <label>Horário da Aplicação: <FaClock /></label>
                <input 
                    type="time" 
                    value={selectedTime} 
                    onChange={(e) => setSelectedTime(e.target.value)} 
                />

                <div className="buttons">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default Reagendamento;