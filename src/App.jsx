import { useEffect, useState } from "react"
import { getCurrentUser } from "./Service/db"

function App() {
  
  const [user, setUser] = useState(null)
  
  useEffect(()=> {
    const session = localStorage.getItem('session')
    if(session){

      const data = getCurrentUser(session)
      setUser(data)
    }
  }, [user])
  
  return (
    <div className="w-full h-full">
      Home Page

      <span>{user?.email}</span>
    </div>
  )
}

export default App
