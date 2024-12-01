import React, {  useState } from 'react'

export const DataContext = React.createContext(null)

function UserDataContext({children}) {
    let [userData,setUserData] = useState([
        'Apple','Orange','Mango','Grapes','Lemon','Pineapple'
    ])

  return <DataContext.Provider value={{userData,setUserData}}>
    {children}
  </DataContext.Provider>
}

export default UserDataContext