import React, { useState } from "react";

import { Container } from "react-bootstrap";
import MoviesList from "../../components/movies-list/MoviesList";
import AppPagination from "../../components/pagination/AppPagination";

const LandingPage = () => {
  const [active, setActive] = useState(1);

  return (
    <Container className="p-0">
      <MoviesList active={active} />
      <AppPagination active={active} setActive={setActive} />
    </Container>
  );
};

export default LandingPage;
