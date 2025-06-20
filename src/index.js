import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DefaultComponent>
            <App />
        </DefaultComponent>
    </React.StrictMode>,
);

reportWebVitals();
