import { createContext, useState} from "react"


export const RecipeContext=createContext();

const RecipeProvider = ({children}) => {


const [username, setUsername] = useState(localStorage.setItem("kullaniciAdi", username) || "")
const [password, setPassword] = useState(localStorage.setItem("password", password) || "")


  return (
<RecipeContext.Provider value={{username,setUsername,password,setPassword}}>

{children}

</RecipeContext.Provider>
  )
}

export default RecipeProvider