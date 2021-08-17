import "./App.css";
import './components/landingpage/LandingPage.css';
// import Header from "./components/landingpage/Header";
// import Lcard from "./components/landingpage/Lcard";
// import Image1 from "./components/landingpage/Image1";
// import Lcard2 from "./components/landingpage/Lcard2";
// import Lcard3 from "./components/landingpage/Lcard3";
// import Lcard4 from "./components/landingpage/Lcard4";
// import Lcard5 from "./components/landingpage/Lcard5";
// import Footer from "./components/landingpage/Footer"

import Signup from './components/landingpage/Signup'

function App() {
    return (
        <div className="App">
            {/* <div className="landing-page">
                <Header />
                <Lcard />
                <div style={{width: "80%", margin: "auto"}}>
                    <Image1 />
                </div>
                <Lcard2 />
                <Lcard3 />
                <Lcard4 />
                <Lcard5 />
                <Footer />
            </div> */}
            <Signup />
        </div>
    );
}

export default App;
