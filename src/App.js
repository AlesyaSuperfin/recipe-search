import { useEffect, useState } from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipeComponent from './MyRecipeComponent';

function App() {

  const MY_ID = "bd64efa6";
  const MY_KEY = "0eab7aa91952b2a1714c88c50d76ee6d";

  const [mySearch, setMySearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("tomato");

  useEffect ( () => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipe(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className='header'>
        <h1>RECIPE SEARCH</h1>
        <h2 id="green">Write down the ingredients and Search over 2.3 million recipes!</h2>
        </div>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input onChange={myRecipeSearch} value={mySearch} />
        </form>
        <button onClick={finalSearch }>Click to Search Recipes</button>
      </div>

      {myRecipe.map((element, index) => (
        <MyRecipeComponent key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories} 
        ingredients={element.recipe.ingredientLines} 
        mealtype={element.recipe.mealType}
        cautions={element.recipe.cautions} />
      ))}
      
    </div>
  );
}

export default App;
