import { useContext } from "react"
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader } from "./HeaderStyles"
import { RecipeContext } from "../../context/RecipeProvider"

const Header = () => {

  const {setQuery}=useContext(RecipeContext)

  return (

    <HeaderContainer>
<MainHeader>Food App</MainHeader>
<FormContainer>
<FoodInput placeholder="search"
onChange={(e)=>setQuery(e.target.value)}/>
<Button type="submit">Search</Button>



</FormContainer>




    </HeaderContainer>
  )
}

export default Header