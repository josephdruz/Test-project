import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IPAddressList = ({ token }) => {
    const [ipAddresses, setIPAddresses] = useState([]);

    useEffect(() => {
        const fetchIPAddresses = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/ip-addresses', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setIPAddresses(response.data);
            } catch (error) {
                alert('Error fetching IP addresses');
            }
        };
        fetchIPAddresses();
    }, [token]);

    return (
        <ul>
            {ipAddresses.map(ip => (
                <li key={ip.id}>{ip.ip} - {ip.label}</li>
            ))}
        </ul>
    );
};

export default IPAddressList;