import { useContext } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { RecipeContext } from "../../context/RecipeProvider";
import foto from "../../assets/home.svg"


const Home = () => {
 
  const{recipes}=useContext(RecipeContext)

  return (
    <div>

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
