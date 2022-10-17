import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Recados.css";
import { useNavigate } from "react-router-dom";
import { Recado } from "../../types/User";

export const Recados: any = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Recado[]>([]);

  function newTask() {
    navigate("/new_tasks");
  }

  //------FUNÇÕES NÃO UTILIZADAS NESSE PROJETO-----
  // const userToken = localStorage.getItem("authToken");
  // const userName = localStorage.getItem("authName");
  // const usersStorage = localStorage.getItem("authData");

  // const handleLogout = async () => {
  //   await auth.signout();
  //   window.location.href = window.location.href;
  // };

  const handleLoadTask = async () => {
    const tasks = await auth.loadTask();
    setTasks(tasks);
  };

  async function handleDeletTask(id: string) {
    await auth.deletTask(id);
    handleLoadTask();
  }

  function handleEditTask(id: string) {
    navigate(`/edit_tasks/${id}`);
  }

  useEffect(() => {
    handleLoadTask();
  }, []);

  return (
    <>
      <div className='container mt-5 rounded-4 shadow'>
        <div className='row bg-white rounded-4 align-items-md-stretch'>
          <header className='container-fluid bg-white rounded-4'>
            <div className=''>
              <h1 className='fw-bold text-center p-2'>Meus Recados</h1>
              <h2 className='text-center p-2'>
                Bem vindo -{" "}
                <span className='text-center text-decoration-underline fs-4 p-2'></span>
              </h2>
              <div>
                <button onClick={newTask} className='btn btn-dark'>
                  Nova Task
                </button>
                <button className='btn btn-primary m-1'>Sair</button>
              </div>
            </div>
          </header>
          <main>
            {/* <!--LISTA RECADOS--> */}
            <div className='m-2 table-responsive '>
              <table className='table table-hover align-middle' id='note-table'>
                <thead className=''>
                  <tr className='fw-bold text-start'>
                    <th>Descrição</th>
                    <th>Detalhamento</th>
                    <th className='text-center'>Ações</th>
                  </tr>
                </thead>
                <tbody className='table-group-divider'>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td className='text-start'>{task.description}</td>
                      <td className='text-start'>{task.detail}</td>
                      <td>
                        <button
                          className='btn btn-primary m-1'
                          onClick={() => handleEditTask(task.id)}
                        >
                          Editar
                        </button>
                        <button
                          className='btn btn-danger m-1'
                          onClick={() => handleDeletTask(task.id)}
                        >
                          Apagar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
