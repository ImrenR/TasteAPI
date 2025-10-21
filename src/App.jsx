
import './App.css'
import { RecipeContext } from './context/RecipeProvider'
import AppRouter from './router/AppRouter'

function App() {
 
  return (
    <RecipeContext>
     <AppRouter/>
    </RecipeContext>
  )
}

export default App
