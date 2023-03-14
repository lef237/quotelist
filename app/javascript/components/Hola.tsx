import React from "react";

// type Props = {
//   name: string;
//   age: number;
// };

const Hola = ({ name = "名無し", age = 99 }: Props) => (
  <>
    <div>こんにちは {name} さん！</div>
    <div>あなたの年齢は {age} 歳です。</div>
  </>
);

export default Hola;
