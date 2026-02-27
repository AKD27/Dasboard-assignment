import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./pages/People";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;