import React, { useState } from 'react';
import axios from 'axios';

const IPAddressForm = ({ token }) => {
    const [ip, setIp] = useState('');
    const [label, setLabel] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/ip-addresses', { ip, label }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('IP Address added successfully');
        } catch (error) {
            alert('Error adding IP Address');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="IP Address" required />
            <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Label" required />
            <button type="submit">Add IP Address</button>
        </form>
    );
};

export default IPAddressForm;