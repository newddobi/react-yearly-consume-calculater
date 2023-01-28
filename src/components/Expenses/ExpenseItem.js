import React, { useContext } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import FormContext from "../../store/form-context";

const ExpenseItem = (props) => {
  const formCtx = useContext(FormContext);

  const itemClickHandler = (itemId) => {
    formCtx.startEditing();
    props.onClickItem(itemId);
  };

  const deleteItem = (itemId) => {
    props.onClickDelete(itemId);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2
            onClick={() => {
              itemClickHandler(props.id);
            }}
            style={{ cursor: "pointer" }}
          >
            {props.title}
          </h2>
          <div className="expense-item__price">${props.amount}</div>
          <div
            className="expense-item__delete"
            onClick={() => {
              deleteItem(props.id);
            }}
            style={{ cursor: "pointer" }}
          >
            삭제
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
