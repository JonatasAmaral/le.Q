import {createContext, useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { auth, firebase } from './services/firebase';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

type User = {
  id: String;
  name: String;
  avatar: String;
}
type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: ()=>Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
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

  return (
    <AuthContext.Provider value={{user, signInWithGoogle}}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
