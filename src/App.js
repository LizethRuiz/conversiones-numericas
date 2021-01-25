import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import ArabigoMaya from "./pages/arabigo-maya";
import MayaArabigo from "./pages/maya-arabigo";
import Home from "./pages/home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          name="Home"
          render={(props) => <Home {...props} />}
        />
        <Route
          path="/arabigo"
          exact
          name="Arabigo"
          render={(props) => <ArabigoMaya {...props} />}
        />
        <Route
          path="/maya"
          name="Maya"
          render={(props) => <MayaArabigo {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
