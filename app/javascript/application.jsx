// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import { createRoot } from 'react-dom/client';

import Hello from './components/Hello';
// const hello = document.getElementById('hello');
// createRoot(hello).render(<Hello/>);

import Hey from './components/Hey';
// const hey = document.getElementById('hey');
// createRoot(hey).render(<Hey/>);

import Hola from "./components/Hola"
// const hola = document.getElementById('hola');
// const holaData = JSON.parse(hola.getAttribute('data'))
// createRoot(hola).render(<Hola name={holaData.name} />);


// const mount = (Component, mountNodeId) => {
//   const mountNode = document.getElementById(mountNodeId);
//   const props = JSON.parse(mountNode.getAttribute('data'));
//   console.log(props)
//   createRoot(mountNode).render(<Component {...props}/>)
// }

import Mount from './Mount'

Mount(Hello, 'hello')
Mount(Hey, 'hey')
Mount(Hola, 'hola')
Mount(Hola, 'hola2')
Mount(Hola, 'hola3')
Mount(Hola, 'hola4')
