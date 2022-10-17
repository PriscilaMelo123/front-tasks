import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Private } from "./pages/Private";
import { Recados } from "./components/Recados/Recados";
import { Login } from "./pages/Login";
import { CriarLogin } from "./pages/CriarLogin";
import { Formulario } from "./components/Formulario/Formulario";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { Editar } from "./components/Editar/Editar";

function App() {
  // const navigate = useNavigate();
  // const userToken = localStorage.getItem("authToken");
  // const auth = useContext(AuthContext);

  // useEffect(() => {
  //   auth.loadTask();
  //   console.log("app");
  // }, []);

  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<Login />} />
        <Route path='/signup' element={<CriarLogin />} /> */}
        <Route path='/' element={<Recados />} />
        <Route path='/new_tasks' element={<Formulario />} />
        <Route path='/edit_tasks/:id' element={<Editar />} />
        {/* <Route path='/private' element={<Private />} /> */}
      </Routes>
    </div>
  );
}

export default App;
