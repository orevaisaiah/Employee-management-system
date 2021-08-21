import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/landingpage/LandingPage.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Signup from "./components/landingpage/Signup";
import Login from "./components/landingpage/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component= {LandingPage} />
                    <div style={{ width: "100%" }}>
                    <Route exact path="/signup" component= {Signup} />
                    <Route exact path="/login" component= {Login} />
                    </div>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
