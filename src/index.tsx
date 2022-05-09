console.log("./src/index.tsx");


import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import "./scss/style.scss";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);

