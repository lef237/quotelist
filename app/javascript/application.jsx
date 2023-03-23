// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import Mount from "./Mount";
import MountComponents from "./MountComponents";
import { getDivIds, getMaxId } from "./divUtil";
import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";

const divElements = document.querySelectorAll("div");
// console.log(divElements)
// const divIds = getDivIds(divElements);

MountComponents(Hello, "hello", divElements);
MountComponents(Hey, "hey", divElements);
MountComponents(Hola, "hola", divElements);
