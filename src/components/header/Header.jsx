
import { useContext } from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./HeaderStyles";
import { RecipeContext } from "../../context/RecipeProvider";



const Header = () => {

  const {setQuery, getData}=useContext(RecipeContext)

const handleSubmit=(e)=> {
  e.preventDefault()
getData()
}

  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput placeholder="search" 
        onChange={(e)=>setQuery(e.target.value)}/>

        <Button>Search</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
