import React from "react";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container mt-5">
    <div className="btn-group">
    <Link to="/" className="btn btn-dark mx-1"  >Logo</Link>
    <Link to="/inicio" className="btn btn-dark mx-1">Inicio</Link>
    <Link to="/nosotros" className="btn btn-dark mx-1">Nosotros</Link>
    <NavLink to="/contacto" className="btn btn-dark mx-1" activeClassName="active">Contacto</NavLink>
    <NavLink to="/lista" className="btn btn-dark mx-1" activeClassName="active">Lista</NavLink>
    <NavLink to="/ejercicio" className="btn btn-dark mx-1" activeClassName="active">Ejercicio</NavLink>

    </div>
    </div>
  );
};

export default Navbar;
