import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaptchaPage from "./components/CaptchaPage";
import ItemList from "./components/ItemList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css"; // Make sure this line is present

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<CaptchaPage />} />
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </Router>
    </DndProvider>
  );
};

export default App;
