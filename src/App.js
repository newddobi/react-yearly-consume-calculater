import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isEditing, setIsEditing] = useState(false);

  const [enteredItemId, setEnteredItemId] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

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
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onAddExpense={saveExpenseHandler}
        enteredItemId={enteredItemId}
        enteredTitle={enteredTitle}
        enteredAmount={enteredAmount}
        enteredDate={enteredDate}
        setEnteredItemId={setEnteredItemId}
        setEnteredTitle={setEnteredTitle}
        setEnteredAmount={setEnteredAmount}
        setEnteredDate={setEnteredDate}
      />
      <Expenses
        items={expenses}
        setIsEditing={setIsEditing}
        onClickItem={updateItemSettingHandler}
        onClickDelete={deleteItemHandler}
      />
    </div>
  );
};

export default App;
