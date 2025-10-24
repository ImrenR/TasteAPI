import { useContext } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

const {username, setUsername, password, setPassword}= useContext(RecipeContext)
const navigate=useNavigate()
const handleSubmit=(e)=> {
  e.preventDefault();
  localStorage.setItem("kullaniciAdi", username);
  localStorage.setItem("sifre", password)
  navigate("/home")
}



  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <StyledImg src="" />
        <Header>{"<MY/>"}RECIPE PAGE</Header>
        <StyledForm>
          <StyledInput placeholder="Username" 
          onChange={(e)=>setUsername(e.target.value)}
          />
          <StyledInput placeholder="Password" 
           onChange={(e)=>setPassword(e.target.value)}
          />
          <StyledButton>LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
