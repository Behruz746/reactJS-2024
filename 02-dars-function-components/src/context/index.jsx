import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  data: [],
  term: "",
  filter: "all",
  load: false,
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    // datani olish uchun function
    case "GET_DATA":
      return { ...state, data: payload };

    // data loading bilish uchun boolen function
    case "ON_LOAD":
      return { ...state, load: payload };

    // data itemlarni delete qilgani function
    case "ON_DELETE":
      const deleteArr = state.data.filter((obj) => obj.id !== payload);
      return { ...state, data: deleteArr };

    // data itemlarni toggle qilgani function
    case "ON_TOGGLE_ITEM":
      const { id, prop } = payload;
      const toggleArr = state.data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { ...state, data: toggleArr };

    // dataga yangi item qo'shish uchun function
    case "ADD_ITEM":
      const addItemArr = {
        ...payload,
        like: false,
        favorite: false,
        id: uuidv4(),
      };
      return { ...state, data: [...state.data, addItemArr] };

    // termga string qo'shadi
    case "ON_TERM":
      return { ...state, term: payload };

    // filter string qo'shadi
    case "ON_FILTER":
      return { ...state, filter: payload };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
