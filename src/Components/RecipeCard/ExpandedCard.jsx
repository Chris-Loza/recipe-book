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
              <div className="servingContainer">
                <p>Amount per serving</p>
                <p className="caloriesText">Calories</p>
              </div>
              <div className="calories">
                <p>230</p>
              </div>
            </div>
          </div>
          <div className="mediumDivider"></div>
          <div className="dailyValueText">
            <div className="dailyValuePercent">
              <p>% Daily Value*</p>
            </div>
            <div className="divider"></div>
            <div className="macro">
              <div className="totalMacro">
                <p>
                  <span>Total Fat</span> 9g
                </p>
              </div>
              <div className="macroPercentage">
                <p>10%</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="macro">
              <div className="totalMacro">
                <p>
                  <span>Total Carbohydrate</span> 9g
                </p>
              </div>
              <div className="macroPercentage">
                <p>10%</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="macro">
              <div className="totalMacro">
                <p>
                  <span>Total Protein</span> 9g
                </p>
              </div>
              <div className="macroPercentage">
                <p>10%</p>
              </div>
            </div>
            <div className="divider"></div>
            {/* 
            <div className="largeDivider"></div>
            <p>
              The % Daily Value (DV) tells you how much a nutrient in a serving
              of food contributes to a daily diet. 2,000 calories a day is used
              for general nutrition advice.
            </p> */}
          </div>
        </div>
        <div className="ingredientsList">Ingredients List</div>
      </div>
    </div>
  );
};

export default ExpandedCard;
