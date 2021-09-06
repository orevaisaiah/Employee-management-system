import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Employee from "./Pages/Employee";
import Payroll from "./Pages/Payroll";
import LandingPage from "./Components/landingpage/LandingPage";
import Signup from "./Components/landingpage/Signup";
import Login from "./Components/landingpage/Login";


function App() {
  return (
    <div className="App">
          <Switch>
          <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
            <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/payroll">
              <Payroll />
            </Route>
            <Route path="/Dashboard">
              <Home />
            </Route>
          </Switch>
        </div>

  );
}

export default App;