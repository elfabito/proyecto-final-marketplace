import "./App.css";
import SearchResult from "./Components/Results/SearchResult";
import MainPage from "./componentes/MainPage";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <SearchResult />
    </div>
  );
}

export default App;
