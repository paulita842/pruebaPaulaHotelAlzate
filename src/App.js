import { useState } from "react";
import "./App.css";
import Search from "./component/Search/Search";
import List from "./component/List/List";
import { data } from "./data/index";

function App() {
  const [habitaciones, setHabitaciones] = useState(data);

  const handleSearch = (text) => {
    const hab = data.habitaciones.filter((item) => item.hotel === text);
    if (hab.length >= 1) {
      setHabitaciones(hab);
    } else {
      setHabitaciones([]);
    }
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      Lista de habitaciones
      {habitaciones.length >= 1 ? (
        <List listItems={habitaciones} />
      ) : (
        <List listItems={data.habitaciones} />
      )}
    </>
  );
}

export default App;
