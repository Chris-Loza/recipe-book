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
          <div className="modalHeader">Add a Recipe</div>
          <div className="radioButtons">Time of day radio buttons</div>
          <div className="recipe">Recipe</div>
          <div className="nutritionSummary">Nutritional Summary</div>
          <div className="recipeImgSubmit">
            Recipe image and submit button
          </div>
        </div>
      </div>
    )
  );
};

export default AddRecipeModal;
