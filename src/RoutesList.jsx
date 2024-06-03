import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import PotatoChips from "./PotatoChips";
import Cheetos from "./Cheetos";
import Apple from "./Apple";

function RoutesList() {
  return (
    <Routes>
      <Route path="/potatochips" element={<PotatoChips />} />
      <Route path="/cheetos" element={<Cheetos />} />
      <Route path="/apple" element={<Apple />} />
      <Route path="/" element={<Home />} />
      {/* Everything above ^^^ useNavigate hook */}
      <Route path="*" element={<Navigate to="/" />} />
      {/* Navigate component ^^^  */}
    </Routes>
  );
}

export default RoutesList;