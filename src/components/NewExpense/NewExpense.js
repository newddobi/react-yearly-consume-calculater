import React, { useContext } from "react";
import FormContext from "../../store/form-context";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const formCtx = useContext(FormContext);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    formCtx.stopEditing();
  };

  const startEditingHandler = () => {
    formCtx.startEditing();
  };

  const stopEditingHandler = () => {
    formCtx.stopEditing();
  };

  return (
    <div className="new-expense">
      {!formCtx.isEditing && (
        <button onClick={startEditingHandler}>기록추가</button>
      )}
      {formCtx.isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          enteredItemId={props.enteredItemId}
          enteredTitle={props.enteredTitle}
          enteredAmount={props.enteredAmount}
          enteredDate={props.enteredDate}
          setEnteredTitle={props.setEnteredTitle}
          setEnteredAmount={props.setEnteredAmount}
          setEnteredDate={props.setEnteredDate}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
