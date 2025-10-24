import axios from "axios";
import { createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("kullaniciAdi") || ""
  );
  const [password, setPassword] = useState(localStorage.getItem("sifre") || "");

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios(URL);
      setRecipes(data.meals);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  if(error){
    return <p>Something went wrong</p>
  };

  if(loading){
return <p>Loading...</p>
  };

  

  return (
    <RecipeContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        query,
        setQuery,
        getData,
        recipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
