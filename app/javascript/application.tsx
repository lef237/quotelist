// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import { createRoot } from 'react-dom/client';

import Hello from './components/Hello';

const container = document.getElementById('app');
createRoot(container).render(<Hello/>);
