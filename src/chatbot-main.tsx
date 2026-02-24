import { createRoot } from "react-dom/client";
import Chatbot from "./components/chatbot/Chatbot";
import "./index.css";

// Check if a container exists, otherwise create one
let container = document.getElementById("psg-chatbot-root");

if (!container) {
    container = document.createElement("div");
    container.id = "psg-chatbot-root";
    document.body.appendChild(container);
}

createRoot(container).render(<Chatbot />);
