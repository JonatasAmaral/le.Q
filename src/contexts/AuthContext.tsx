import firebase from "firebase";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../services/firebase";

type User = {
  id: String;
  name: String;
  avatar: String;
}
type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: ()=>Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({children}:AuthContextProviderProps) {
  const [ user, setUser ] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user) {
        const {displayName, photoURL, uid} = user;
  
        if(!displayName || !photoURL){
          throw new Error("Conta associada deve ter nome e foto");
        }
  
        setUser({
          id: uid, 
          name: displayName, 
          avatar: photoURL
        })
      }
    })

    return ()=>{
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider)

    if(result.user) {
      const {displayName, photoURL, uid} = result.user;

      if(!displayName || !photoURL){
        throw new Error("Conta associada deve ter nome e foto");
      }

      setUser({
        id: uid, 
        name: displayName, 
        avatar: photoURL
      })
    }
  }

  return(
    <AuthContext.Provider value={{user, signInWithGoogle} as AuthContextType}>
      {children}
    </AuthContext.Provider>
  );
}