import { WelcomeContextInterface } from "./Interfaces/WelcomeContextInterface";
import { WelcomeContext } from "./Contexts/WelcomeContext";
import WelcomeComponent from "./Components/WelcomeComponent";
import React from "react";

export default function Welcome(props: WelcomeContextInterface) {
  return (
    <WelcomeContext.Provider value={props}>
      <WelcomeComponent />
    </WelcomeContext.Provider>
  );
}
