import React, { useEffect, useState } from "react";

function CounterItem({ counterGenerate }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const newItem = counterGenerate();
    setItem(newItem);
    console.log("render");
  }, [counterGenerate]);

  return (
    <ul className="item__list">
      {item?.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <li></li>
    </ul>
  );
}

export default CounterItem;
