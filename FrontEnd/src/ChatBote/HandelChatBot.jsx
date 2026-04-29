import React, { useState, useContext } from "react";
import ChatBot from "./ChatBot";
import { GlobelValue } from "../context/GlobelVariable";

const HandelChatBot = () => {
  const { JWT_Token } = useContext(GlobelValue);

  return <div>{JWT_Token ? <ChatBot /> : null}</div>;
};
export default HandelChatBot;
