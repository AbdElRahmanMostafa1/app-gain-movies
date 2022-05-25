import React from "react";
import { Pagination } from "react-bootstrap";

const AppPagination = ({ active, setActive }) => {
  let items = [];

  for (let number = 1; number <= 5; number++) {
    const changeActiveHandler = () => {
      setActive(number);
    };

    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={changeActiveHandler}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination className="justify-content-center">{items}</Pagination>;
};

export default AppPagination;
