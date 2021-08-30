import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Signup from "./components/landingpage/Signup";
import Login from "./components/landingpage/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <div style={{ width: "100%" }}>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;
