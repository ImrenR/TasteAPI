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
        <img src={diet} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          
          <span> {recipe.strMeal}</span>
          <h2>Ingredients</h2>
          <span>{recipe.strIngredient1}</span>
          <span>{recipe.strIngredient2}</span>
          <span>{recipe.strIngredient3}</span>
          <span>{recipe.strIngredient4}</span>
          <span>{recipe.strIngredient5}</span>
          <span>{recipe.Instructions}</span>
        </OtherPart>
        <ImgContainer src={recipe.strMealThumb} width="480px" />
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
