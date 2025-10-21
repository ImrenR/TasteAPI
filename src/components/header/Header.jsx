import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader } from "./HeaderStyles"

const Header = () => {
  return (

    <HeaderContainer>
<MainHeader></MainHeader>
<FormContainer>
<FoodInput type="submit" placeholder="search"/>
<Button>SEARCH</Button>



</FormContainer>




    </HeaderContainer>
  )
}

export default Header