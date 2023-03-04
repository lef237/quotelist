// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import { createRoot } from 'react-dom/client';

import Hello from './components/Hello';
const hello = document.getElementById('hello');
createRoot(hello).render(<Hello/>);

import Hey from './components/Hey';
const hey = document.getElementById('hey');
createRoot(hey).render(<Hey/>);
