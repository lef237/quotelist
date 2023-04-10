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
import QuotePost from "./components/QuotePost";
import QuoteDelete from "./components/QuoteDelete";
import CoquoteButton from "./components/CoquoteButton";
import GuestCoquoteButton from "./components/GuestCoquoteButton";
import HeaderButton from "./components/HeaderButton";

const divElements = document.querySelectorAll("div");

MountComponents(Hello, "hello", divElements);
MountComponents(Hey, "hey", divElements);
MountComponents(Hola, "hola", divElements);
MountComponents(QuotesData, "quotesdata", divElements);
MountComponents(QuotesCount, "quotescount", divElements);
MountComponents(QuotePost, "quotepost", divElements);
MountComponents(QuoteDelete, "quotedelete", divElements);
MountComponents(CoquoteButton, "coquotebutton", divElements);
MountComponents(GuestCoquoteButton, "guestcoquotebutton", divElements);
MountComponents(HeaderButton, "headerbutton", divElements);
