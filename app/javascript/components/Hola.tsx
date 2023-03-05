import React from "react";

const Hola = ({ name = "名無し", age = 99 }) => (
  <>
    <div>こんにちは {name} さん！</div>
    <div>あなたの年齢は {age} 歳です。</div>
  </>
);

export default Hola;
