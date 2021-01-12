import React from "react";
import style from "./recipe.module.css"
 const Recipe = ({title,calories,image,ingredients,cautions,productivity,totalTime}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      {/* <ol>
          {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
          ))}
      </ol> */}
      <h3>Cautions : {cautions}</h3>
    <h3>TotalTime : {totalTime}</h3>
    <h3>Productivity : {productivity}</h3>
      <p className={style.calories}>Calories : {calories}</p>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
};
export default Recipe;