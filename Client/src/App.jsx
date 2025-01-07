import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot.css"
import config from "../chatbot.config";
import MessageParser from "./classes/MessageParser";
import ActionProvider from "./classes/ActionProvider";

function App() {
  return (
    <div className="App">
      <h1>React Chatbot</h1>
      <Chatbot
        config={config} 
        messageParser={MessageParser} 
        actionProvider={ActionProvider} 
      />
    </div>
  );
}

export default App;
