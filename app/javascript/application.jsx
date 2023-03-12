import Mount from "./Mount";

import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";

Mount(Hello, "hello");
Mount(Hey, "hey");

// const holaNames = ["hola1", "hola2", "hola3", "hola4"];
const number = 7; //本来は4だが、数字を多めにしても問題なく表示される
const holaNames = Array.from(
  { length: number },
  (_, index) => `hola${index + 1}`
);

holaNames.forEach((name) => {
  Mount(Hola, name);
});

// Mount(Hola, "hola1");
// Mount(Hola, "hola2");
// Mount(Hola, "hola3");
// Mount(Hola, "hola4");
