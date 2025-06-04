import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { DarkModeProvider } from './contexts/DarkModeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
<HelmetProvider>
<DarkModeProvider>
  <App />
</DarkModeProvider>
</HelmetProvider>);

