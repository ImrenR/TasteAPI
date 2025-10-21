import { useContext } from "react"
import Header from "../../components/header/Header"
import { RecipeContext } from "../../context/RecipeProvider"
import RecipeCard from "./RecipeCard"

const Home = () => {
  const { recipes } = useContext(RecipeContext)
  return (
    <>
      <Header />
      {recipes && recipes.length > 0 ? <RecipeCard /> : null}
    </>
  )
}

export default Home