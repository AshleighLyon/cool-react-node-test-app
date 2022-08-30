import React from "react";
import "./App.css";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './auth/login';
import Main from './Main';
import MainApple from './MainApple';

function App() {
  
  const { isAuthenticated, user } = useAuth0();
  
  //console.log("user obj", user);
  //console.log("role is", user["cool-app/roles"][0]);

  return (
    <div className="App">
      <div className="App">
        { isAuthenticated ? (
            user["cool-app/roles"][0] === "Apple" ? (
               <MainApple />
            ) : <Main />
        ) 
        : <div>
            <h1>Cool React Node SP App</h1>
              <h2>Welcome</h2>
                <p style={{ fontSize: "1rem" }}>Please Login.</p>
                <LoginButton />
          </div>
        }
      </div>
    </div>
  );
}

export default App;