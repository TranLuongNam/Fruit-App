import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
// import logo from './logow.jpg'; 

const App = () => {
  const APP_ID = "51e32c33";
  const APP_KEY = "  32dcb9c130217ef6461c37c97c448089";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    // console.log("useEffect");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log(data);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault(); //Một điểm khác biệt nữa trong React là bạn không thể trả về false để chặn những hành vi mặc định mà phải gọi preventDefault trực tiếp
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="app-title">
        <div className="header-title">
          <h5>FOOD-DRINK </h5>
          <hr />
        </div>

        <div className="contacts">
          <h2>
            {" "}
            Contacts <i class="fas fa-user-friends"></i>
          </h2>
          <h3>
            <i class="fas fa-phone-square-alt"></i> : 0327187851
          </h3>
          <h3>
            {" "}
            <i class="fas fa-envelope-square"></i> : luongnam19021998@gmail.com
          </h3>
          <h3>
            <i class="fab fa-github-square"></i> : Github/TranLuongNam
          </h3>
        </div>
      </div>

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Enter The Dish You Want...Made By NamTran"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="repice">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cautions={recipe.recipe.cautions}
            totalTime={recipe.recipe.totalTime}
            productivity={recipe.recipe.yield}
          />
        ))}
      </div>
      {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
    </div>
  );
};

export default App;
