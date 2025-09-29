import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/home_page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
