import React from "react";
import { useSelector } from "react-redux";
import Azienda from "../components/preferenceButton";

const Preferiti = () => {
  const preferiti = useSelector((state) => state.preferences.preferiti);

  return (
    <div>
      <h2>Elenco Preferiti</h2>
      <ul>
        {preferiti.map((azienda) => (
          <li key={azienda.id}>{azienda.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Azienda;
