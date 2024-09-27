import { useEffect } from "react";
import { Backdrop, Button, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalPortal = document.querySelector("#root-modal");

export default function Modal({ children, toggleModal }) {
  useEffect(() => {
    const handleKeydownEsc = e => {
      // console.log("handleKeydownEsc >> e:::", e);
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeydownEsc);
    // console.log("Modal componentDidMount");

    return () => {
      window.removeEventListener("keydown", handleKeydownEsc);
      // console.log("Modal componentWillUnmount");
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <Button type="button" onClick={toggleModal}>
          Close modal
        </Button>
      </ModalWindow>
    </Backdrop>,
    modalPortal,
  );
}
