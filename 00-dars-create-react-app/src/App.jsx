import {
  Info,
  Filter,
  SearchPanel,
  MovieList,
  MoviesAddForm,
  TestBlock,
} from "./components";
import "./app.scss";

function App() {
  const data = [
    { name: "Empire of Osman", views: 900, favorite: false },
    { name: "7 Samurai", views: 1000, favorite: true },
    { name: "Porlash", views: 1500, favorite: false },
  ];

  return (
    <div className="App font-monospace">
      <div className="content">
        <Info />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <MovieList dataList={data} />
        <MoviesAddForm />
        <TestBlock />
      </div>
    </div>
  );
}

export default App;
