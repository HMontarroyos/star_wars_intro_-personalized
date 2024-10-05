import React, { Suspense } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { Home, FilmId } from "./views";
import { Loading, Header } from "./components";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmId />} />
        </Router>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
