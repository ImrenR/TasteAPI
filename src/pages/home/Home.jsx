import { useContext } from "react"
import Header from "../../components/header/Header"
import { RecipeContext } from "../../context/RecipeProvider"
import RecipeCard from "./RecipeCard"
import asci from "../../assets/home.svg"
const Home = () => {
  const { recipes } = useContext(RecipeContext)
  return (
    <>
      <Header />
      {recipes.length > 0 ?
       <RecipeCard recipes={recipes}/> : <img src={asci} alt=""/>}
    </>
  )
}

export default Home