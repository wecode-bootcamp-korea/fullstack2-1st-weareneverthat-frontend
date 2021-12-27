import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route path="/signup" />
      <Route path="/signin" />
      <Route path="/list" />
      <Route path="/detail" />
    </Routes>
  </BrowserRouter>
);
