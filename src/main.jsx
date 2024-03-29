import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global"

import { AuthProvider } from "./hooks/auth"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
)
