import Mount from "./Mount";
import MountComponents from "./MountComponents";
import { getDivIds, getMaxId } from "./divUtil"

import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";

Mount(Hello, "hello");
Mount(Hey, "hey");

// div要素のNodeListを取得
const divElements = document.querySelectorAll('div');
// div要素のidsを取得
const divIds = getDivIds(divElements);

MountComponents(Hola, "hola", getMaxId('hola', divIds));
