import { Routes, Route } from "react-router-dom";

import Home from "./routes/home.component";

const App = () => {
  return (
    <Routes>
      <Route index={true} element={<Home />} />
    </Routes>
  );
};

export default App;
