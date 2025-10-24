
import { useLocation } from 'react-router-dom'

const Details = () => {

  const { state :
    {recipe}
  } = useLocation()

  
  return (
    <div>Details</div>
  )
}

export default Details