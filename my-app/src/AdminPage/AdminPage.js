import React from 'react';
import './AdminPage';
import AdminCards from '../AdminCards/AdminCards.js';

class AdminPage extends React.Component{
    render(){
        return (
        <div className="admin-container">
            <AdminCards/>
        </div>)
    }

}

export default AdminPage;