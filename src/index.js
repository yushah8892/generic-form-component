import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import GenericForm from "./GenericForm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const customStyles = {
  form: {
    border: "2px solid #007bff",
    padding: "30px"
  },
  input: {
    borderColor: "#007bff",
    backgroundColor: "#f7f7f7",
    color: "#007bff",
    fontWeight: "bold"
  },
  select: {
    borderColor: "#007bff",
    backgroundColor: "#f7f7f7",
    color: "#007bff",
    fontWeight: "bold"
  }
};

root.render(
  <StrictMode>
    {/* <App /> */}
    <GenericForm customStyles={customStyles} />
  </StrictMode>
);
