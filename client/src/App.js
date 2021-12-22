import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { testDetails } from "./data2";
import About, {
    Alram,
    Features,
    KidProfile,
    News,
    Policy,
    Privacy,
    Profile,
    Support,
    NewsDesc,
} from "./pages/About";
import Home from "./pages/Home";
// import Intro from "./pages/Intro";
import Intro2 from "./pages/Intro2";
import Login from "./pages/Login";
import ResultTest from "./pages/ResultTest";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import TestDetail from "./pages/TestDetail";
import Testlist from "./pages/Testlist";

function App() {
    const [appIndex, setAppIndex] = useState(null);
    const [loginCheck, setLoginCheck] = useState(false);
    const [testIndex, setTestIndex] = useState(testDetails[0].id);

    return (
        <div className="app">
            {/* <Intro></Intro> */}

            {appIndex === 0 ? (
                <Intro2 appIndex={appIndex} setAppIndex={setAppIndex} />
            ) : null}
            {appIndex === 1 ? (
                <>
                    <Header />
                    <Footer />
                </>
            ) : null}
            {appIndex === 2 ? <Login /> : null}

            <Switch>
                {/* <Route
                    exact
                    path="/"
                    render={() => (
                        <Redirect
                            to={{
                                pathname: "/login",
                            }}
                            component={Login}
                        />
                    )}
                /> */}
                <Route
                    exact
                    path="/home"
                    component={Home}
                    loginCheck={loginCheck}
                    setLoginCheck={setLoginCheck}
                    setAppIndex={setAppIndex}
                    appIndex={appIndex}
                ></Route>
                <Route exact path="/test" component={Test}></Route>
                <Route exact path="/testlist" component={Testlist}></Route>
                <Route
                    exact
                    path="/testlist/result/:id"
                    component={ResultTest}
                ></Route>
                <Route exact path="/test/detail/:id">
                    <TestDetail
                        testIndex={testIndex}
                        setTestIndex={setTestIndex}
                    ></TestDetail>
                </Route>
                <Route
                    exact
                    path="/login"
                    component={Login}
                    loginCheck={loginCheck}
                    setLoginCheck={setLoginCheck}
                ></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route path="/about/Profile" component={Profile}></Route>
                <Route path="/about/KidProfile" component={KidProfile}></Route>
                <Route path="/about/Alram" component={Alram}></Route>
                <Route exact path="/about/News" component={News}></Route>
                <Route
                    exact
                    path="/about/News/Newsdesc"
                    component={NewsDesc}
                ></Route>
                <Route path="/about/Support" component={Support}></Route>
                <Route path="/about/Features" component={Features}></Route>
                <Route path="/about/Policy" component={Policy}></Route>
                <Route path="/about/Privacy" component={Privacy}></Route>
            </Switch>
        </div>
    );
}

export default App;
