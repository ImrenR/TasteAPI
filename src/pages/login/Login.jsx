import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from "./LoginStyles"
import meal from "../../assets/meal.svg"


const Login = () => {
  return(

    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header></Header>
              </FormContainer>
      <StyledForm>
<StyledInput placeholder=""/>
<StyledButton></StyledButton>
      </StyledForm>
    </LoginContainer>
  )
}

export default Login