import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuditLog = ({ token }) => {
    const [audits, setAudits] = useState([]);

    useEffect(() => {
        const fetchAudits = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/audit-log', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setAudits(response.data);
            } catch (error) {
                alert('Error fetching audit log');
            }
        };
        fetchAudits();
    }, [token]);

    return (
        <ul>
            {audits.map(audit => (
                <li key={audit.id}>{audit.action} - {audit.ip_address_id} by {audit.user_id}</li>
            ))}
        </ul>
    );
};

export default AuditLog;