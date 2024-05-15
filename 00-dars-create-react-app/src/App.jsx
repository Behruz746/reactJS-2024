import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Info,
  Filter,
  SearchPanel,
  MovieList,
  MoviesAddForm,
  TestBlock,
} from "./components";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Osman", views: 900, favorite: false, like: false, id: 1 },
        { name: "7 Samurai", views: 1000, favorite: true, like: true, id: 2 },
        { name: "Porlash", views: 1500, favorite: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((obj) => obj.id != id);
      return {
        data: newData,
      };
    });
  };

  addItem = (item) => {
    const newItem = {
      ...item,
      like: false,
      favorite: false,
      id: uuidv4(),
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  toggleItem = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          }
          return item;
        }),
      };
    });
  };

  searchHeander = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(
      (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  upDateTermHandel = (term) => {
    this.setState({ term });
  };

  filterHendel = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.views >= 1000);
      default:
        return arr;
    }
  };

  filterClick = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const allMovies = data.length;
    const favoriteMovies = data.filter((c) => c.favorite).length;
    const visibleData = this.filterHendel(
      this.searchHeander(data, term),
      filter
    );

    return (
      <div className="App font-monospace">
        <div className="content">
          <Info allMovies={allMovies} favoriteMovies={favoriteMovies} />
          <div className="search-panel">
            <SearchPanel upDateTermHandel={this.upDateTermHandel} />
            <Filter
              filterClick={(e) =>
                this.filterClick(e.currentTarget.getAttribute("data-toggle"))
              }
              filter={filter}
            />
          </div>
          <MovieList
            dataList={visibleData}
            onDelete={this.onDelete}
            toggleItem={this.toggleItem}
          />
          <MoviesAddForm dataList={visibleData} addItem={this.addItem} />
          <TestBlock />
        </div>
      </div>
    );
  }
}

// function App() {
//   const data = [
//     { name: "Empire of Osman", views: 900, favorite: false, id: 0 },
//     { name: "7 Samurai", views: 1000, favorite: true, id: 1 },
//     { name: "Porlash", views: 1500, favorite: false, id: 2 },
//   ];

//   const onDelete = (id) => {
//     console.log(id);
//   };

//   return (
//     <div className="App font-monospace">
//       <div className="content">
//         <Info />
//         <div className="search-panel">
//           <SearchPanel />
//           <Filter />
//         </div>
//         <MovieList dataList={data} onDelete={onDelete} />
//         <MoviesAddForm dataList={data} />
//         <TestBlock />
//       </div>
//     </div>
//   );
// }

export default App;
