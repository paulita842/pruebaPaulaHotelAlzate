import React  from "react";
import "./style.css";

const Search = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e.target.elements[0].value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="destino">
          Detino:
          <input
            className="search-bar"
            placeholder={"Buscar...."}
            name="destino"
          />
        </label>
        <label htmlFor="fechas">
          Fechas:
          <input type="date" className="search-bar" name="fechas" />
        </label>
        <label htmlFor="huespedes">
          Huéspedes:
          <input className="search-bar" name="huespedes" placeholder="cantidad Huéspedes"/>
        </label>

        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

export default Search;