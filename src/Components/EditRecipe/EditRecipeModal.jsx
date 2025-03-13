import React from "react";
import "./editRecipeModal.css";

const EditRecipeModal = ({ showEditModal, setShowEditModal }) => {
  return (
    showEditModal && (
      <div
        className="editRecipeModalContainer"
        onClick={() => setShowEditModal(false)}
      >
        <div
          className="editRecipeModal"
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    )
  );
};

export default EditRecipeModal;
