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

import Hola from "./components/Hola"
const hola = document.getElementById('hola');
const holaData = JSON.parse(hola.getAttribute('data'))
// ブラウザのターミナルでJSONを確認した
console.log(holaData);
createRoot(hola).render(<Hola name={holaData.name} />);

// このあたりのコードを共通化できるはず。また、propsで複数渡せるはず。
// [React on Rails (with Webpacker) - gemあり/なしを比較する](https://zenn.dev/d0ne1s/articles/671923a9c4cca3)

// Propsのあり・なしで、それぞれ関数を作ってDRYにできるはず。
// 関数自体は他のファイルに置いて、importして持ってくる。
