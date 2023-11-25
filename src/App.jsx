import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./layout/header";
import { Home } from "./pages/home";
import { History } from "./pages/historico";
import { Calculator } from "./pages/calculadora";

function App() {
  return (
    <>
      <div className="sm:container absolute left-2/4 z-10 mx-auto -translate-x-2/4">
        <Header />
      </div>
      <Routes>
        <Route key='/' exact path='/' element={<Home />} />
        <Route key='/calculadora' exact path='/calculadora' element={<Calculator />} />
        <Route key='/historico' exact path='/historico' element={<History />} />
      </Routes>
    </>
  );
}

export default App;
