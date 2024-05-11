import React, { useState } from "react";

// hardoyim reactda class ishlatish uchun react componentdan voris olish kerak!)
class User extends React.Component {
  // react class larda constructor ishlatish shart emas malumot bolsa classda nomini yozib ishlatsa boladi
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    // malumotni ditruktizatsiya qilsa bo'ladi

    const { firstName, lastName, age } = this.props; // this.props componentga keladigan malumot
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px 20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "19px" }}>
          full name user: {`${firstName} ${lastName}`}
        </h1>
        <h1 style={{ fontSize: "19px" }}>age user: {age} years old</h1>

        <div></div>
      </div>
    );
  }
}

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: "",
    };
  }

  countPlus = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  countMinus = () => {
    this.setState((prevState) => ({
      counter:
        !prevState.counter <= 0 ? prevState.counter - 1 : prevState.counter,
    }));
  };

  countReset = () => {
    this.setState((prevState) => ({ counter: 0 }));
  };

  changeHandler = (e) => {
    this.setState((prevState) => ({ age: e.target.value }));
  };

  render() {
    return (
      <>
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "10px 20px",
              border: 0,
              borderRadius: "5px",
              backgroundColor: "#ccc",
            }}
            onClick={this.countPlus}
          >
            UP
          </button>
          <button
            style={{
              padding: "10px 20px",
              border: 0,
              borderRadius: "5px",
              backgroundColor: "#ccc",
            }}
            onClick={this.countMinus}
          >
            DOWN
          </button>
          <button
            style={{
              padding: "10px 20px",
              border: 0,
              borderRadius: "5px",
              backgroundColor: "#ccc",
            }}
            onClick={this.countReset}
          >
            RESET
          </button>
          <h1>{this.state.counter}</h1>
        </div>
        <form active="#" style={{ display: "flex", flexDirection: "column" }}>
          <span>Yoshni kiriting! {this.state.age}</span>
          <input
            type="number"
            min={1}
            max={999}
            className="form-control search-input mt-3"
            onChange={this.changeHandler}
          />
        </form>
      </>
    );
  }
}

function Counter() {
  const [isCount, setIsCount] = useState(0);

  return (
    <div style={{ width: "100%", display: "flex", gap: "10px" }}>
      <button
        style={{
          padding: "10px 20px",
          border: 0,
          borderRadius: "5px",
          backgroundColor: "#ccc",
        }}
        onClick={() => setIsCount((prev) => prev + 1)}
      >
        UP
      </button>
      <button
        style={{
          padding: "10px 20px",
          border: 0,
          borderRadius: "5px",
          backgroundColor: "#ccc",
        }}
        onClick={() => setIsCount((prev) => (!prev <= 0 ? prev - 1 : prev))}
      >
        DOWN
      </button>
      <button
        style={{
          padding: "10px 20px",
          border: 0,
          borderRadius: "5px",
          backgroundColor: "#ccc",
        }}
        onClick={() => setIsCount(0)}
      >
        RESET
      </button>

      <h1>{isCount}</h1>
    </div>
  );
}

function TestBlock() {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "19px" }}>
        TEST Block for new function components and class components or React
        methods
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <User firstName={"Behruz"} lastName={"Madaminov"} age={18} />
        <h1>Counter with function component</h1>
        <Counter />
        <h1>Counter with class component</h1>
        <Count />
      </div>
    </div>
  );
}

export default TestBlock;
