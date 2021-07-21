import React from "react";
import Recipes from "./Recipes";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipes key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}
export default Menu;
