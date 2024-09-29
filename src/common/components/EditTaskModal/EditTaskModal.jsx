import Modal from "common/components/Modal";
import { Button } from "common/components/Button/Button";
import { useState } from "react";
import { useEditTaskMutation } from "features/tasks/tasksSlice";

export default function EditTaskModal({ toggleModal, task }) {
  const [editTask] = useEditTaskMutation();
  const [inputText, setInputText] = useState(task.text);

  const changeInputValue = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    editTask({ ...task, text: inputText });
    toggleModal();
  };

  return (
    <>
      <Modal toggleModal={toggleModal}>
        Модалка
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis
          debitis quibusdam doloremque perspiciatis distinctio.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={changeInputValue}
            type="text"
            name="text"
            placeholder="Edit task text..."
            value={inputText}
          />
          <Button type="submit">Edit task</Button>
        </form>
      </Modal>
    </>
  );
}
