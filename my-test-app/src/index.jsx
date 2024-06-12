import ReactDOM from "react-dom"

import { App } from "./App"
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>
);
