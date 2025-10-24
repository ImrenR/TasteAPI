
import RecipeProvider from './context/RecipeProvider'
import AppRouter from './router/AppRouter'
import PrivateRouter from './router/PrivateRouter'


function App() {

return (

  <RecipeProvider>
    <AppRouter/>
    <PrivateRouter/>
  </RecipeProvider>
)

}

export default App
