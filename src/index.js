import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./app"

createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)