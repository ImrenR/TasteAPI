import { createContext, useState} from "react"
import axios from "axios"

export const RecipeContext=createContext();

const RecipeProvider = ({children}) => {


const [username, setUsername] = useState(localStorage.getItem("kullaniciAdi") || "")
const [password, setPassword] = useState(localStorage.getItem("sifre") || "")

const [query, setQuery] = useState("")
const [recipes, setRecipes] = useState([])

const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

const getData = async()=> {
const {data}= await axios.get(URL)
setRecipes(data.meals)
}

getData()

return (
<RecipeContext.Provider value={{username,setUsername,password,setPassword, setQuery, recipes,setRecipes}}>

{children}

</RecipeContext.Provider>
  )
}

export default RecipeProvider