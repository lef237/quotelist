// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import MountComponents from "./MountComponents";
import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";

const divElements = document.querySelectorAll("div");

MountComponents(Hello, "hello", divElements);
MountComponents(Hey, "hey", divElements);
MountComponents(Hola, "hola", divElements);
