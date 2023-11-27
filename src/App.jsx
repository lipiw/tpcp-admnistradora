import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/widgets/layout/navbar";
import routes from "@/routes";
import { Home } from "./pages";
import { History } from "./pages";
import { Calculator } from "./pages";

function App() {
  return (
    <>
      <div className="sm:container absolute left-2/4 z-10 mx-auto -translate-x-2/4">
        <Navbar routes={routes} />
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
