import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            setToken(response.data.token);
        }catch (error) {
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
