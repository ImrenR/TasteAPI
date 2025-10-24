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
    return <img src="https://t4.ftcdn.net/jpg/04/25/04/31/360_F_425043151_fEW5PV5rZ5MX9LxcQd3sewzetmoooIpJ.jpg" style={{width: "100vh"}}/>
  };

  if(loading){
return <img src="https://d37oebn0w9ir6a.cloudfront.net/account_6827/customerio-loading-animation_244ab356f603e104472b77ceb1e5add4.gif"/>
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
