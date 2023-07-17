import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout/navbar";
import routes from "@/routes";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="sm:container absolute left-2/4 z-10 mx-auto -translate-x-2/4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        <Route key='/' exact path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
