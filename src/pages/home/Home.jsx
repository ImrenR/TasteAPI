import { useContext } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { RecipeContext } from "../../context/RecipeProvider";
import foto from "../../assets/home.svg"
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
 
  const{recipes}=useContext(RecipeContext)

  return (
    <div>
<Navbar/>
<Header/>

{recipes.length > 0 ? (<RecipeCard recipes={recipes}/>
)
: (
<img src={foto}/>
)}

    </div>
  );
};

export default Home;
