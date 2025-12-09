import React, { useState } from "react";

import { Header } from "../Header";
import { Home } from "../Home";
import { About } from "../About";
import { VR } from "../VR";
import { Contact } from "../Contact";

export function Main() {
  const [activeSection, setActiveSection] = useState("HOME");

  return (
    <>
      <Header activeSection={activeSection} />

      <Home setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <VR setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
    </>
  );
}
