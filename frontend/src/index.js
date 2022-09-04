import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';
import "bootstrap-icons/font/bootstrap-icons.css";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Replaced with React 18 compatible version
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

serviceWorkerRegistration.register();
