import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [error, setError] = useState(null);

  const titleChangeHandler = (event) => {
    props.setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    props.setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    props.setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (props.enteredTitle.trim().length === 0) {
      setError({
        title: "Title 값이 비어있습니다.",
        message: "Title을 작성해주세요.",
      });
      return;
    }

    if (!props.enteredAmount) {
      setError({
        title: "Amount 값이 비어있습니다.",
        message: "Amount을 작성해주세요.",
      });
      return;
    }

    if (!props.enteredDate) {
      setError({
        title: "Date 값이 비어있습니다.",
        message: "날짜를 설정해주세요.",
      });
      return;
    }

    console.log();

    const expenseData = {
      id: props.enteredItemId || new Date().getTime(),
      title: props.enteredTitle,
      amount: +props.enteredAmount,
      date: new Date(props.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.setEnteredItemId("");
    props.setEnteredTitle("");
    props.setEnteredAmount("");
    props.setEnteredDate("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={props.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={props.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={props.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            취소
          </button>
          <button type="submit">확인</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
