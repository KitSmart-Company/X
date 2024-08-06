import React, { FC } from "react";
import SingIn from "./pages/SingIn";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home  from "./pages/Home";


const App: FC = () => {
  // 1 Создаем кастомный компонент SingIn и работаем над визуальной частью.
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/singin" element={<Footer />} />
      </Routes>
    </div>
  );
};

export default App;
