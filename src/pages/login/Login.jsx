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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { username, setUsername, password, setPassword } =
    useContext(RecipeContext);

    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("kullaniciAdi", username)
       localStorage.setItem("sifre", password)
       navigate("/home")
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<My/>"} Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
