import { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import { Cards, RecipeButton, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from 'react-router-dom'

const RecipeCard = () => {

  const {recipes}=useContext(RecipeContext)
 const navigate=useNavigate()
  return (
    <>
    {recipes.map((recipe)=> (
<Cards >
      <RecipeHeader>{recipe.strMeal}</RecipeHeader>
    <RecipeImage src={recipe.strMealThumb}/>
    <RecipeButton
    onClick={(e)=>navigate("/details" , {state:{recipe}})}>Details</RecipeButton>
    </Cards>
    ))}
    
    </>
  )
}

export default RecipeCard