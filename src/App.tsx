import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { TodoPage } from "./pages/TodosPage";

const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<TodoPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
