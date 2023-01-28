import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* <select>
          <option value="latest_sort">최신순</option>
          <option value="high_cost_sort">높은 가격순</option>
          <option value="low_cost_sort">낮은 가격순</option>
        </select> */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        {/* <select>
          <option value="">전체</option>
          <option value="0">1월</option>
          <option value="1">2월</option>
          <option value="2">3월</option>
          <option value="3">4월</option>
          <option value="4">5월</option>
          <option value="5">6월</option>
          <option value="6">7월</option>
          <option value="7">8월</option>
          <option value="8">9월</option>
          <option value="9">10월</option>
          <option value="10">11월</option>
          <option value="11">12월</option>
        </select> */}
      </div>
    </div>
  );
};

export default ExpensesFilter;
