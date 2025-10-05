import { useState, useEffect } from "react";
import Header from "./components/Header";
import BodyStart from "./components/BodyStart";
import BodyContents from "./components/BodyContents";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import * as Jollibee from "./Global";

function App() {
  const [action, setAction] = useState("ordering");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/order") {
      setAction(Jollibee.action[1]);
    } else {
      setAction(Jollibee.action[0]);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header action={action} />
      <Routes>
        <Route path="/" element={<BodyStart />} />
        <Route path="/order" element={<BodyContents />} />
        <Route path="*" element={<Navigate to="/order"></Navigate>} />
      </Routes>
    </div>
  );
}

export default App;
