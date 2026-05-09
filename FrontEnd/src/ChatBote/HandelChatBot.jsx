import React, { useState, useContext } from "react";
import ChatBot from "./ChatBot";
import { GlobelValue } from "../context/GlobelVariable";

const HandelChatBot = () => {
  const { User_Type } = useContext(GlobelValue);

  return <div>
    {(User_Type === "User" || User_Type === "Earner") && <ChatBot />}
  </div>;
};
export default HandelChatBot;
