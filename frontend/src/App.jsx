import React, { useEffect, useReducer } from 'react';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import Chat from './views/Chat/Chat';
import RequireAuth from './components/ProtectedRoutes/RequireAuth';
import './App.css';
import { AuthContext } from './context/authContext';
import { reducer } from './reducer';
import ProtectedLogin from './components/ProtectedRoutes/ProtectedLogin';
const App = () => {



  const [store, dispatch] = useReducer(reducer, {
    authentication: {
      isLoading: false,
      isAuthorized: false,
      errors: [],
    }
  })
  useEffect(() => {
    dispatch({type: 'authorization'});
   },[])

  

  return (
    <AuthContext.Provider value={{store, dispatch}}>
         <Routes>
          <Route exact path="/" element={
          <RequireAuth>
            <Chat />
          </RequireAuth>
          } />
          <Route path="/login" element={
            <ProtectedLogin>
                <Login />
            </ProtectedLogin>
           } />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </AuthContext.Provider>
  )
}

export default App;