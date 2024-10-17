import { CheckIcon, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteClick }) {
  const navigate = useNavigate(); // hook do react-router

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/detalhes?${query.toString()}`);
  }

  return (
    <ul
      className={
        tasks.length == 0 ? "" : "space-y-4 p-6 bg-slate-200 rounded-md shadow"
      }
    >
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex items-center gap-2 bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteClick(task.id)}>
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
