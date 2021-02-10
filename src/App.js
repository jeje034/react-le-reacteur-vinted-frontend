import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/offer/:id">
                    <Offer></Offer>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;