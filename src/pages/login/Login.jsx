import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src=''/>
        <Header>{"<MY/>"}RECIPE PAGE</Header>
      <StyledForm>
        <StyledInput placeholder='Username'/>
                <StyledInput placeholder='Password'/>
        <StyledButton>LOGIN</StyledButton>
      </StyledForm>
      
      </FormContainer>
    </LoginContainer>
  )
}

export default Login