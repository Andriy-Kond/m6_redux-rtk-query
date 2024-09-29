import { useState } from "react";
import {
  useDeleteTaskMutation,
  useToggleCompletedMutation,
  useEditTaskMutation,
  useFetchTaskByIdQuery,
} from "features/tasks/tasksSlice";
import { MdClose, MdEditNote } from "react-icons/md";

import css from "./Task.module.css";
import EditTaskModal from "common/components/EditTaskModal";

export const Task = ({ task }) => {
  const [deleteTask, resultDelete] = useDeleteTaskMutation();
  const [toggleCompleted, resultCompleted] = useToggleCompletedMutation();
  const [editTask, resultEdit] = useEditTaskMutation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
    // setInputText(task.text); //Якщо розмітка EditTaskModal в цьому компоненті: то щоб при повторному відкритті після закриття кнопкою close modal там був поточний текст а не той, що вводили і не зберегли
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };
  const handleToggle = () => {
    toggleCompleted(task);
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
        disabled={resultCompleted.isLoading}
      />

      <p className={css.text}>{task.text}</p>
      <button
        className={css.btn}
        onClick={handleDelete}
        disabled={resultDelete.isLoading}
        aria-label="Delete task"
        // disabled все одно не спрацьовує, якщо швидко натискати - йде запит на ще одне видалення з відповіддю 404. Тому для дійсно disabled треба робити це при події кліку - в handleDelete
      >
        <MdClose size={24} />
      </button>

      <button
        className={`${css.btn} ${css.btnEdit}`}
        onClick={() => toggleModal()}
        disabled={resultEdit.isLoading}
        aria-label="Edit task">
        <MdEditNote size={24} />
      </button>

      {isOpenModal && <EditTaskModal toggleModal={toggleModal} task={task} />}
    </div>
  );
};
