import { MdClose, MdEditNote } from "react-icons/md";
import css from "./Task.module.css";
import {
  useDeleteTaskMutation,
  useToggleCompletedMutation,
  useEditTaskMutation,
} from "features/tasks/tasksSlice";
import Modal from "common/components/Modal";
import { useState } from "react";
import { Button } from "common/components/Button/Button";

export const Task = ({ task }) => {
  const [deleteTask, resultDelete] = useDeleteTaskMutation();
  const [toggleCompleted, resultCompleted] = useToggleCompletedMutation();
  const [editTask, resultEdit] = useEditTaskMutation();

  const [inputText, setInputText] = useState(task.text);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
    setInputText(task.text); // щоб при повторному відкритті після закриття кнопкою close modal там був поточний текст а не той, що вводили і не зберегли
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };
  const handleToggle = () => {
    toggleCompleted(task);
  };

  const changeInputValue = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    editTask({ ...task, text: inputText });
    toggleModal();
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
        // disabled все одно не спрацьовує, якщо швидко натискати - йде запит на ще одне видалення з відповіддю 404. Тому для дійсно disabled треба робити це при події кліку в handleDelete
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

      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          Модалка
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
            debitis quibusdam doloremque perspiciatis distinctio.
          </p>
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              onChange={changeInputValue}
              className={css.field}
              type="text"
              name="text"
              placeholder="Edit task text..."
              value={inputText}
            />
            <Button type="submit">Edit task</Button>
          </form>
        </Modal>
      )}
    </div>
  );
};
