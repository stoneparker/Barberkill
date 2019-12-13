import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../../services/api';
import './styles.css';

export default function Signup() {
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cel, setCel] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    // const email = 

    async function registerClient() {
        const data = {
            email: localStorage.getItem("email"),
            name: name,
            cpf: cpf,
            telephone: cel,
            cellphone: cel,
            password: password2,
        }

        const response = await api.post('/clients', data);
        localStorage.setItem('client_id', response.data.id);
        alert('Cadastrado com sucesso!')

        // storageCliId(data.email);

    }

    async function storageCliId(email) {
        const response = await api.get('/clients/email', email);

        alert(response.data[0]);
        localStorage.setItem('client_id', response.data.id);
    }

    function justLetters(e){
        const letters = ["ç", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

        if (letters.indexOf(e.key.toLowerCase()) == -1) e.preventDefault();
    }

    function justNumbers(e) {
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

        if (numbers.indexOf(e.key.toLowerCase()) == -1) e.preventDefault();
    }


    return (
        <div id="signup">
            <input type="text" name="name" id="name" placeholder="Seu nome completo" maxLength="100"
                onChange={ event => setName(event.target.value) } 
                onKeyDown={ event => justLetters(event)}
            />
            <input type="text" name="cpf" id="cpf" placeholder="CPF" 
                onChange={ event => setCpf(event.target.value) } 
                onKeyDown={ event => justNumbers(event) }
            />
            <input type="tel" name="cel" id="cel" placeholder="Telefone"
                onChange={ event => setCel(event.target.value) }
                onKeyDown={ event => justNumbers(event) } 
            />
            <input type="password" name="password1" id="password1" placeholder="Senha" onChange={ event => setPassword1(event.target.value) } />
            <input type="password" name="password2" id="password2" placeholder="Confirmar senha" onChange={ event => setPassword2(event.target.value) } />
            <Link to="/agnd3">
                <button onClick={ registerClient }>Cadastrar</button>
            </Link>
        </div>
    );
};
