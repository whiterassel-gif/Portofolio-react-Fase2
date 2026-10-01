import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./assets/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Tambahkan basename sesuai nama repo lu */}
    <BrowserRouter basename="/Portofolio-react-Fase2">
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);