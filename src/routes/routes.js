import { Route, BrowserRouter, Switch } from "react-router-dom";
//import de todas as paginas para serem renderizadas no App.js
//apenas como  "<Routes />""
import Home from "../pages/Home";
import Episodes from "../pages/Episodes";
import Locations from "../pages/Locations";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Episodes} path="/Episodes" />
        <Route component={Locations} path="/Locations" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
