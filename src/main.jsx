// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import "dropzone/dist/dropzone.css"

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  // </StrictMode>
);
