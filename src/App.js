import Login from "./Pages/Login/Login";
import "./App.css";
import InputPage from "./Pages/InputPage/InputPage";
import { Route, Routes } from "react-router-dom";
import OutputPage from "./Pages/OutputPage/OutputPage";
function App() {
  return (
    <div className="Bg">
      {/* Import login Page */}
      <Routes>
        <Route path={"/"} element={<Login className="App" />} />
        <Route path="//input" element={<InputPage />}  />
        <Route
          path="//output"
          element={<OutputPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
