import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome/Welcome";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
