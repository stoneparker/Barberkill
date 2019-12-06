import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../../../services/api';
import './styles.css';

export default function Signin () {

    const [password, setPassword] = useState('');
    const [incorrectPass, setIncorrectPass] = useState('');
    const email = localStorage.getItem('email');
    async function fetchLogin() {

        var aux = false;
        const response = await api.get('/clients');
        
        for (let client of response.data) {
            if (client.password == password) {
                localStorage.setItem('client_id', client.id)
                alert('Logado com sucesso!');
                aux = true;
                setIncorrectPass('');
                setPassword('');
                // storageCliId();
                break;
            }
        }
        
        if (aux == false) {
            setIncorrectPass('Senha incorreta');
            setPassword('');
        }

    }
    async function storageCliId() {
        // const response = await api.get('/clients', email);

        // console.log(response.data);
    }

    return (
        <signin>
            <input type="password" name="pass" id="pass" onChange={ event => setPassword(event.target.value) } placeholder="Sua senha" required/>
            <p> { incorrectPass } </p>
            <Link to="/agnd3">
                <button type="button" onClick={fetchLogin}>Logar</button>
            </Link>
        </signin>
    );
};
