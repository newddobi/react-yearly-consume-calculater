import React, { useContext, useEffect, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import DUMMY_EXPENSES from "./dummy-expenses";
import FormContext from "./store/form-context";

const App = () => {
  const formCtx = useContext(FormContext);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [enteredItemId, setEnteredItemId] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  useEffect(() => {
    if (!formCtx.isEditing) {
      setEnteredItemId("");
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  }, [formCtx.isEditing]);

  const saveExpenseHandler = (newExpense) => {
    const updateTargetItem = expenses.find(
      (expense) => expense.id === newExpense.id
    );

    if (updateTargetItem) {
      setExpenses((prevExpenses) => {
        const updateTargetItemIndex = prevExpenses.findIndex(
          (expense) => expense.id === newExpense.id
        );
        const targetItem = prevExpenses[updateTargetItemIndex];
        targetItem.title = newExpense.title;
        targetItem.amount = newExpense.amount;
        targetItem.date = newExpense.date;
        return prevExpenses;
      });
    } else {
      setExpenses((prevExpenses) => {
        return [newExpense, ...prevExpenses];
      });
    }
  };

  const updateItemSettingHandler = (selectedItemId) => {
    const updateTargetItem = expenses.find(
      (expense) => expense.id === selectedItemId
    );
    setEnteredItemId(updateTargetItem.id);
    setEnteredTitle(updateTargetItem.title);
    setEnteredAmount(updateTargetItem.amount);

    const month = updateTargetItem.date.toLocaleString("en-US", {
      month: "2-digit",
    });
    const day = updateTargetItem.date.toLocaleString("en-US", {
      day: "2-digit",
    });
    const year = updateTargetItem.date.getFullYear();

    setEnteredDate(`${year}-${month}-${day}`);
  };

  const deleteItemHandler = (selectedItemId) => {
    setExpenses((prevExpenses) => {
      const filteredExpenses = prevExpenses.filter(
        (item) => item.id !== selectedItemId
      );
      return filteredExpenses;
    });
  };

  return (
    <div>
      <NewExpense
        onAddExpense={saveExpenseHandler}
        enteredItemId={enteredItemId}
        enteredTitle={enteredTitle}
        enteredAmount={enteredAmount}
        enteredDate={enteredDate}
        setEnteredTitle={setEnteredTitle}
        setEnteredAmount={setEnteredAmount}
        setEnteredDate={setEnteredDate}
      />
      <Expenses
        items={expenses}
        onClickItem={updateItemSettingHandler}
        onClickDelete={deleteItemHandler}
      />
    </div>
  );
};

export default App;
