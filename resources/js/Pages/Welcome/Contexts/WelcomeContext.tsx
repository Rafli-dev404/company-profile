import { WelcomeContextInterface } from "../Interfaces/WelcomeContextInterface";
import { createContext } from "react";

export const WelcomeContext = createContext<WelcomeContextInterface | null>(
  null,
);
