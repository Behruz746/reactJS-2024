import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from "./context";
import {
  Info,
  Filter,
  SearchPanel,
  MovieList,
  MoviesAddForm,
  TestBlock,
} from "./components";
import "./app.scss";

const App = () => {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // console.log(state);
  // console.log(dispatch);

  useEffect(() => {
    setIsLoading(false);
    fetch("https://f193fb7f1d079d8b.mokky.dev/items", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        dispatch({ type: "GET_DATA", payload: data });
        // console.log(json);

        // agar siz apidan kelgan malumotni ozgartirmoqchi bolsangiz
        // const newArr = json.map((item) => ({
        //   name: item.name,
        //   id: item.id,
        //   views: item.views,
        //   favorite: item.favorite,
        //   like: item.like,
        // }));
      })
      // api dan malumot olishda xato bolsa ishlaydi
      .catch((err) => console.error(err))
      // api dan malumot olish yakunlansa ishlaydi
      .finally(() => {
        // console.log("FINISHED");
        setIsLoading(true);
      });
  }, []);

  // itemlarni o'chiradi
  const onDelete = (id) => {
    setData((prev) => prev.filter((obj) => obj.id != id));
  };

  // itemlar qo'shadi
  const addItem = (item) => {
    const newItem = {
      ...item,
      like: false,
      favorite: false,
      id: uuidv4(),
    };
    setData([...data, newItem]);
  };

  // itemlarga like va favorit berish uchun toggle function
  const toggleItem = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    setData(newArr);
  };

  // itemlarni qidirish functioni
  const searchHeander = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(
      (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  // itemlarni filter qiladigan function
  const filterHendel = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.views >= 1000);
      default:
        return arr;
    }
  };

  const upDateTermHandel = (term) => {
    setTerm(term);
  };

  const filterClick = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="App font-monospace">
      <div className="content">
        <Info
          allMovies={data.length}
          favoriteMovies={data.filter((c) => c.favorite).length}
        />
        <div className="search-panel">
          <SearchPanel upDateTermHandel={upDateTermHandel} />
          <Filter
            filterClick={(e) =>
              filterClick(e.currentTarget.getAttribute("data-toggle"))
            }
            filter={filter}
          />
        </div>
        <MovieList
          dataList={filterHendel(searchHeander(data, term), filter)}
          onDelete={onDelete}
          toggleItem={toggleItem}
          isLoading={isLoading}
        />
        <MoviesAddForm addItem={addItem} />
        <TestBlock />
      </div>
    </div>
  );
};

export default App;
