import { useRef } from "react";
import "./addRecipeModal.css";

const AddRecipeModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="modal" onClick={closeModal} ref={modalRef}>
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          Add Recipe Modal
        </div>
      </div>
    )
  );
};

export default AddRecipeModal;
