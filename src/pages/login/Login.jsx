import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import meal from "../../assets/meal.svg";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<My/>"} Recipe</Header>
      
      <StyledForm>
        <StyledInput placeholder="Username"/>
         <StyledInput placeholder="Password"/>
        <StyledButton>Login</StyledButton>
        
      </StyledForm>
</FormContainer>
    </LoginContainer>
  );
};

export default Login;
