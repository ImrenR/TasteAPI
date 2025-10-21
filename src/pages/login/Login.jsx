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
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";


const Login = () => {

  const {username,setUsername, password,setPassword}=useContext(RecipeContext);

  const handleSubmit = (e)=> {
    e.preventDefault()


  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<My/>"} Recipe</Header>
      
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}/>
         <StyledInput placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}/>
        <StyledButton>Login</StyledButton>
        
      </StyledForm>
</FormContainer>
    </LoginContainer>
  );
};

export default Login;
