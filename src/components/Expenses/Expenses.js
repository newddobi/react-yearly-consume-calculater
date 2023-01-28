import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredMonth, setFilteredMonth] = useState("");
  const [filteredSort, setFilteredSort] = useState("latest_sort");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const yeadFiltered = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    const monthFiltered = yeadFiltered.filter((expense) => {
      if (filteredMonth) {
        return expense.date.getMonth().toString() === filteredMonth;
      }
    });

    setFilteredExpenses(yeadFiltered);
  }, [filteredYear, filteredMonth, filteredSort, setFilteredExpenses]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          onClickItem={props.onClickItem}
          onClickDelete={props.onClickDelete}
        />
      </Card>
    </div>
  );
};

export default Expenses;
