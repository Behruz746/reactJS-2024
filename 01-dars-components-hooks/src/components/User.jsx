import React, { useState, useEffect, useCallback, useRef } from "react";
import CounterItem from "./CounterItem";

function User({ name, lastName, age, job, hobby }) {
  const [isCount, setIsCount] = useState(0);
  const [userAge, setUserAge] = useState(false);
  const [userDelete, setUserDelete] = useState(true);
  const [active, setActive] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const cvcRef = useRef(null);

  const handelInput = (e) => {
    let val = e.target.value;
    setCardNumber(val);

    if (val.length === 16) {
      cvcRef.current.focus();
    }

    console.log(cardNumber);
  };

  const colors = {
    color: active ? "green" : "red",
    fontWeight: 700,
  };

  const counterGenerate = useCallback(() => {
    return new Array(isCount)
      .fill("")
      .map((_, idx) => `Counter number ${idx + 1}`);
  }, [isCount]);

  const countPlus = (method) => {
    switch (method) {
      case "plus":
        setIsCount((prev) => prev + 1);
        break;
      case "minus":
        setIsCount((prev) => (!prev <= 0 ? prev - 1 : prev));
        break;
      case "toggle":
        setActive((prev) => !prev);
        break;
      default:
        setIsCount(0);
        break;
    }
  };

  const userAgeSet = (e) => {
    setUserAge(e.target.value);
  };

  const deleteUser = () => {
    setUserDelete(false);
  };

  // didMount and upDate,
  useEffect(() => {
    document.title = `user: ${name} - count: ${isCount}`;
    return () => console.log("DELETED"); // unMount
  }, [userDelete]);

  return (
    <>
      {userDelete && (
        <div className="user__item">
          <div className="container__title">
            <h1 className="title">User object</h1>
            <button type="button" className="delete__btn" onClick={deleteUser}>
              Delete user
            </button>
          </div>
          <div className="item__content">
            <div className="user__item__row">
              <h1 className="user__item__title">first name: {name},</h1>
              <h1 className="user__item__title">last name: {lastName},</h1>
            </div>
            <div className="user__item__row">
              <h1 className="user__item__title">
                age: {!userAge ? age : userAge},
              </h1>
              <h1 className="user__item__title">job: {job},</h1>
            </div>
            <div className="user__item__row">
              <h1 className="user__item__title">hobby: {hobby}.</h1>
            </div>
          </div>
          <div className="user__btns">
            <h1 style={colors}>User activeted: {isCount}</h1>
            <div className="btns">
              <button
                type="button"
                onClick={(e) =>
                  countPlus(e.currentTarget.getAttribute("data-count"))
                }
                data-count="toggle"
              >
                Toggle
              </button>
              <button
                type="button"
                onClick={(e) =>
                  countPlus(e.currentTarget.getAttribute("data-count"))
                }
                data-count="plus"
              >
                +
              </button>
              <button
                type="button"
                onClick={(e) =>
                  countPlus(e.currentTarget.getAttribute("data-count"))
                }
                data-count="minus"
              >
                -
              </button>
              <button
                type="button"
                onClick={(e) =>
                  countPlus(e.currentTarget.getAttribute("data-count"))
                }
                data-count="reset"
              >
                reset
              </button>
            </div>
            <CounterItem counterGenerate={counterGenerate} />
          </div>
          <div className="user__age user__item">
            <label htmlFor="user-age">Yoshni ozgartirish</label>
            <input type="number" id="user-age" onChange={userAgeSet} />
          </div>
          <div className="user__age user__item">
            <label htmlFor="user-age">CVC Card</label>
            <input type="text" onChange={handelInput} value={cardNumber} />
            <label htmlFor="user-age">Secure number</label>
            <input ref={cvcRef} type="text" />
          </div>
        </div>
      )}
    </>
  );
}

export default User;
