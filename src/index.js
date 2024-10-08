import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from './App';
import './App.css'
import GlobalState from './components/expense-tracker/Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter >
            <GlobalState>
                    <App />         
            </GlobalState>
        </BrowserRouter>
    </React.StrictMode>
    
);


