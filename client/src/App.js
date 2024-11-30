import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Online Order System</h1>
        <Routes>
          <Route exact path="/" element={<OrderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
