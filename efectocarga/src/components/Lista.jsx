import React, { useState } from "react";

const Lista = () => {
  const [lista, setLista] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [agregarProducto, setAgregarProducto] = useState([]);

  const cargandoDatos = (e) => {
    e.preventDefault();

    if (!(lista, descripcion).trim()){
      console.log("No debe dejar en blanco");
      return;
    }

    console.log(
      "Se están procesando los datos... Agregó:" + lista + descripcion
    );

    setAgregarProducto([
      ...agregarProducto,
      { Nombre: lista, Descripcion: descripcion },
    ]);

    e.target.reset();
    setLista("");
    setDescripcion("");
  };

  return (
    <div>
      <form onSubmit={cargandoDatos}>
        <input
          type="text"
          placeholder="lista"
          onChange={(e) => setLista(e.target.value)}
        />
        <input
          type="text"
          placeholder="descripción"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Agregar
        </button>
      </form>
      <ul>
        {agregarProducto.map((item, index) => (
          <li key={index}>
            {item.Nombre} - {item.Descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
