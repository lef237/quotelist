// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import { Turbo } from "@hotwired/turbo-rails";

Turbo.session.drive = false;

import MountComponents from "./MountComponents";
import Hello from "./components/Hello";
import Hey from "./components/Hey";
import Hola from "./components/Hola";
import QuotesData from "./components/QuotesData";
import QuotesCount from "./components/QuotesCount";

const divElements = document.querySelectorAll("div");

MountComponents(Hello, "hello", divElements);
MountComponents(Hey, "hey", divElements);
MountComponents(Hola, "hola", divElements);
// holaholaをHelloでマウントしている。実験的な例。
MountComponents(Hello, "holahola", divElements);
MountComponents(QuotesData, "quotesdata", divElements);
MountComponents(QuotesCount, "quotescount", divElements);
