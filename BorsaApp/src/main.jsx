import React from "react";
import DOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";


DOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

);