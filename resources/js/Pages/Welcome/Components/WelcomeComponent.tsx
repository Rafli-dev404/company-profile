import { useContext } from "react";
import { WelcomeContext } from "../Contexts/WelcomeContext";
import React from "react";

export default function WelcomeComponent() {
  const welcomeContext = useContext(WelcomeContext)?.model;
  return <div className={"text-red-500"}>{welcomeContext?.data.message}</div>;
}
