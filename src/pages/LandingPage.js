import React, { useState } from "react";

import MoviesList from "../components/movies-list/MoviesList";
import { Container, Pagination, useAccordionButton } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
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

  return (
    <Container className="p-0">
      <MoviesList active={active} />
      <Pagination className="justify-content-center">{items}</Pagination>
    </Container>
  );
};

export default LandingPage;
