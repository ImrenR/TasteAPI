import { useNavigate } from "react-router-dom"

import {Cards, MainContainer, RecipeButton, RecipeHeader, RecipeImage} from "./HomeStyles"

const RecipeCard = ({recipes}) => {
  const navigate=useNavigate()
  return(
<MainContainer>
{recipes.map((recipe)=>(

  <Cards key={recipe.idMeal}>
    <RecipeHeader>{recipe.strMeal} </RecipeHeader>
      <RecipeImage src={recipe.strMealThumb}/>
   <RecipeButton type="submit"
   onClick={()=>navigate("/details", {state:{recipe}})}>Details</RecipeButton>
   
   
  </Cards>
)




)}





</MainContainer>
  )
}

export default RecipeCard