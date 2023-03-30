import "./App.css";
import Search from "./component/Search/Search";
import List from "./component/List/List";
import { data } from "./data/index";

function App() {
  const handleSearch = () => {};

  return (
    <>
      <Search handleSearch={handleSearch} />
      Lista de habitaciones sin filtro
      <List listItems={data.habitaciones} />
    </>
  );
}

export default App;
