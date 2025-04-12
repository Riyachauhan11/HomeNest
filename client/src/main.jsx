import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { ChatContextProvider } from "./context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
