import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    props.setIsEditing(false);
  };

  const startEditingHandler = () => {
    props.setIsEditing(true);
  };

  const stopEditingHandler = () => {
    props.setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!props.isEditing && (
        <button onClick={startEditingHandler}>기록추가</button>
      )}
      {props.isEditing && (
        <ExpenseForm
          enteredItemId={props.enteredItemId}
          enteredTitle={props.enteredTitle}
          enteredAmount={props.enteredAmount}
          enteredDate={props.enteredDate}
          setEnteredTitle={props.setEnteredTitle}
          setEnteredAmount={props.setEnteredAmount}
          setEnteredDate={props.setEnteredDate}
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
