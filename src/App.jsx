import { Navbar, Welcome } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App=() => {
    return (
        <div>
            <Navbar />
            <Welcome />
        </div>
    );
}

export default App;
