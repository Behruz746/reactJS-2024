import React, { useState, useEffect, useContext } from "react";
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
  const { _, dispatch } = useContext(Context);

  const fetchData = async () => {
    try {
      const response = await fetch("https://f193fb7f1d079d8b.mokky.dev/items");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      ////////////
      // agar siz apidan kelgan malumotni ozgartirmoqchi bolsangiz
      // const newArr = data.map((item) => ({
      //   name: item.name,
      //   id: item.id,
      //   views: item.views,
      //   favorite: item.favorite,
      //   like: item.like,
      // }));
      //////////

      dispatch({ type: "GET_DATA", payload: data });
      dispatch({ type: "ON_LOAD", payload: true });
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useEffect(() => {
    dispatch({ type: "ON_LOAD", payload: false });
    fetchData();
  }, []);

  return (
    <div className="App font-monospace">
      <div className="content">
        <Info />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <MovieList />
        <MoviesAddForm />
        <TestBlock />
      </div>
    </div>
  );
};

export default App;
