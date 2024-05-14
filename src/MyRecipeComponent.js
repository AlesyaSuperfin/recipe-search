function MyRecipeComponent ({label, image, calories, ingredients, mealtype, cautions}) {
    return(
        <div className="containerRecipe">
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <h3>Perfect for {mealtype}!</h3>
            </div>

            <div className="container">
                <img src={image} alt="recipeImg" />
            </div>

            <div className="containerDescription">
            <h4>Ingredients:</h4>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>🗸 {ingredient}</li>
                ))}
            </ul>
            </div>

            <div className="containerDescription">
                <h4>Nutrition: </h4>
                <p>🍴 {calories.toFixed()} calories</p>
            </div>

            <div className="containerDescription">
                <h4>Cautions: </h4>
                <ul>
                {cautions.map((caution, index) => (
                    <li>* {caution}</li>
                )) }
                </ul>
            </div>

        </div>
    )
}

export default MyRecipeComponent;