import { createContext, useState } from "react";
export const AuthContext = createContext();

function UserProvider({children}){
  function login (response) {
    setCurrentUser({username:response});
  }
  function logout (){
    setCurrentUser(null);
  }
  const [currentUser, setCurrentUser]= useState(null);

  return(
    <AuthContext.Provider value={{login, currentUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider;
