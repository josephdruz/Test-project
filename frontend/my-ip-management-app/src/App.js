import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import IPAddressForm from './components/IPAddressForm';
import IPAddressList from './components/IPAddressList';
import AuditLog from './components/AuditLog';
import './styles/App.css'

const App = () => {
    const [token, setToken] = useState(null);

    if (!token) {
        return <LoginForm setToken={setToken} />;
    }

    return (
        <div>
            <h1>IP Address Management</h1>
            <IPAddressForm token={token} />
            <IPAddressList token={token} />
            <AuditLog token={token} />
        </div>
    );
};

export default App;