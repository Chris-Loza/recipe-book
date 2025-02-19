import { useRef, useState } from "react";
import "./addRecipeModal.css";

const AddRecipeModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = () => {
    setShowModal(false);
  };

  const [selectedTime, setSelectedTime] = useState("Breakfast");

  return (
    showModal && (
      <div className="modal" onClick={closeModal} ref={modalRef}>
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="modalHeader">
            <p>Add a Recipe</p>
            <div className="botBorder"></div>
          </div>
          <div className="radioButtons">
            <fieldset className="fieldSet">
              <legend>Select a Time of Day</legend>
              <label htmlFor="Breakfast">
                <input
                  type="radio"
                  name="time"
                  id="Breakfast"
                  value={"Breakfast"}
                  checked={selectedTime === "Breakfast"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Breakfast</span>
              </label>

              <label htmlFor="Lunch">
                <input
                  type="radio"
                  name="time"
                  id="Lunch"
                  value={"Lunch"}
                  checked={selectedTime === "Lunch"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Lunch</span>
              </label>

              <label htmlFor="Dinner">
                <input
                  type="radio"
                  name="time"
                  id="Dinner"
                  value={"Dinner"}
                  checked={selectedTime === "Dinner"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Dinner</span>
              </label>

              <label htmlFor="Snacks">
                <input
                  type="radio"
                  name="time"
                  id="Snacks"
                  value={"Snacks"}
                  checked={selectedTime === "Snacks"}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span>Snacks</span>
              </label>
            </fieldset>
          </div>
          <div className="recipe">Recipe</div>
          <div className="nutritionSummary">Nutritional Summary</div>
          <div className="recipeImgSubmit">Recipe image and submit button</div>
        </div>
      </div>
    )
  );
};

export default AddRecipeModal;
