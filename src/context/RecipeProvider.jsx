import { createContext, useState } from "react"


export const RecipeContext = createContext()

const RecipeProvider = ({children}) => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")




  return (
  <RecipeContext.Provider value={{username, setUsername, password, setPassword}}>
   {children}
    </RecipeContext.Provider>

)
}

export default RecipeProvider