import { useLocation } from "react-router-dom"
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from "./DetailStyles"

const Details = () => {

  const {state:
    {recipe}}=useLocation()
  
  return (
    <DetailContainer>
<DetailPart>
<ImgContainer src={recipe.strMealThumb}/>

<HeaderContainer></HeaderContainer>
<IngredContainer></IngredContainer>
<OtherPart></OtherPart>

</DetailPart>

    </DetailContainer>
  )
}

export default Details