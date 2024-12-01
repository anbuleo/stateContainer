import ContainerPage from "./Components/ContainerPage"
import UserDataContext from "./context/UserDataContext"



function App() {
  return (
    <>
    <UserDataContext>
    <ContainerPage />
    </UserDataContext>
    
    </>
  )
}

export default App
