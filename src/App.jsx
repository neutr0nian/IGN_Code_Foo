import { useState } from "react";
import { Navbar, Welcome } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Welcome />
        </div>
    );
}

export default App;
