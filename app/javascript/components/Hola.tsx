import React from "react";
// import { createRoot } from "react-dom/client";

const Hola = ({ name = "名無し", age = 99 }) => (
  <>
    <div>こんにちは {name} さん！</div>
    <div>あなたの年齢は {age} 歳です。</div>
  </>
);

// Hello.defaultProps = {
//   name: '名無し'
// }

export default Hola;
