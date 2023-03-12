import Mount from "./Mount";
import MountComponents from "./MountComponents";

import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";

Mount(Hello, "hello");
Mount(Hey, "hey");
MountComponents(Hola, "hola");
