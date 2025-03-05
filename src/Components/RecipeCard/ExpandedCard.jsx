import React from "react";
import "./expandedCard.css";

const ExpandedCard = ({ cardExpand, setCardExpand }) => {
  return (
    <div className="expandedCardContainer" onClick={() => setCardExpand(false)}>
      <div className="expandedCard" onClick={(e) => e.stopPropagation()}>
        <div className="nutritionLabel">
          <div className="header">
            <h1>Nutrition Facts</h1>
            <div className="divider"></div>
            <div className="servingSize">
              <p>
                <b>Serving size</b>
              </p>
              <p>
                <b>123g</b>
              </p>
            </div>
            <div className="largeDivider"></div>
            <div className="calorieInfo">
              <p>
                <b>Amount per serving</b>
              </p>
              <div className="calories">
                <p>Calories</p>
                <p>230</p>
              </div>
            </div>
          </div>
          <div className="mediumDivider"></div>
          <div className="dailyValueText">
            <p>
              <b>% Daily Value *</b>
            </p>
            <div className="divider"></div>
            <div className="fat">
              <p>
                <b>Total Fat</b> 9g
              </p>
              <p>
                <b>10%</b>
              </p>
            </div>
            <div className="divider"></div>
            <div className="carbs">
              <p>
                <b>Total Carbohydrate</b> 37g
              </p>
              <p>
                <b>10%</b>
              </p>
            </div>
            <div className="divider"></div>
            <div className="protein">
              <p>
                <b>Protein</b> 3g
              </p>
              <p>
                <b>10%</b>
              </p>
            </div>
            <div className="largeDivider"></div>
            <p>
              The % Daily Value (DV) tells you how much a nutrient in a serving
              of food contributes to a daily diet. 2,000 calories a day is used
              for general nutrition advice.
            </p>
          </div>
        </div>
        <div className="ingredientsList">Ingredients List</div>
      </div>
    </div>
  );
};

export default ExpandedCard;
