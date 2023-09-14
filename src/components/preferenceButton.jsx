import React from "react";
import { useDispatch } from "react-redux";
import { aggiungiPreferito } from "./preferencesActions";

const Azienda = ({ nome, id }) => {
  const dispatch = useDispatch();

  const handleAggiungiPreferito = () => {
    dispatch(aggiungiPreferito({ nome, id }));
  };

  return (
    <div>
      <h2>{nome}</h2>
      <button onClick={handleAggiungiPreferito}>Aggiungi ai preferiti</button>
    </div>
  );
};

export default Azienda;
