import Mount from "./Mount";
import MountComponents from "./MountComponents";

import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";

Mount(Hello, "hello");
Mount(Hey, "hey");

// div要素のNodeListを取得
const divElements = document.querySelectorAll('div');

// NodeListからdivのidsを取得している
const getDivIds = (divElements) => {
  const divIds = [];
  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id) {
      divIds.push(divElements[i].id);
    }
  }
  return divIds;
}

// 特定の単語が先頭にある、divのIDの末尾の数字の中で、最大値を取得する
const getMaxId = (prefix, ids) => {
  const filteredIds = ids.filter(function(id) {
    return id.startsWith(prefix);
  }).map(function(id) {
    return parseInt(id.replace(prefix, ''));
  });
  return Math.max.apply(Math, filteredIds);
}

const divIds = getDivIds(divElements);

MountComponents(Hola, "hola", getMaxId('hola', divIds));
