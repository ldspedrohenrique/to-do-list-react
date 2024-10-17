import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // excuta a função toda vez que algum valor dentro do array mudar
  useEffect(() => {
    //nome pra identificar o dado que vou armazenar | o que sera armazenado em tasks(identificador)
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // deixando a lista vazia a função callback do hook useEffect só será executada quando o componente renderizar | ou uma vez
  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    }

    //Descomente para chamar uma API para chamar as tarefas
    // fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  // Função para remover a tarefa do state
  function onDeleteClick(taskId) {
    const newTasks = [];

    tasks.forEach((task) => {
      if (task.id != taskId) {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
