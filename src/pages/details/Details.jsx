import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import diet from "../../assets/diet.svg";
const Details = () => {
  const {
    state: { recipe },
  } = useLocation();

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.strMeal}</h1>
        <img src={diet} alt="" />
      </HeaderContainer>

      <DetailPart>
 <ImgContainer>
 <img src={recipe.strMealThumb}  width="400px" />
 </ImgContainer>
   

        <OtherPart>
          <h2>Ingredients</h2>
          <span>{recipe.strIngredient1}</span>
          <span>{recipe.strIngredient2}</span>
          <span>{recipe.strIngredient3}</span>
          <span>{recipe.strIngredient4}</span>
          <span>{recipe.strIngredient5}</span>
          <span>{recipe.Instructions}</span>
 </OtherPart>
       
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
