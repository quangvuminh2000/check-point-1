import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
// import { UserRoute } from './Routes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />)

