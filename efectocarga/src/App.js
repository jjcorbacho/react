import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lista from "./components/Lista";
import Civilizaciones from "./components/Civilizaciones";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Ejercicio from "./components/Ejercicio";


function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Switch>
        <Route path="/nosotros/:id">
          <Civilizaciones />
        </Route>
        <Route path="/inicio">
          <Inicio />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/Lista">
          <Lista/>
        </Route>
        <Route path="/ejercicio">
          <Ejercicio/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
