import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import "./App.css";
import './index.css';



function App() {

  // Sign up button-function
  const { loginWithRedirect } = useAuth0();
  
  // Definining the state of the user
  const { isAuthenticated } = useAuth0();


  // <header className="App-header"></header>
  return (
    <div className="App">  
        {isAuthenticated ? (
          <>
          <div className="container-logout">
            <div className="profile">
              <Profile />
            </div>
            <div className="button">
              <LogoutButton />
            </div>
        </div>
          </>
        ) : (       
          // Div className body which contains all of the content of the first (main) page
          <div className="body">  
            <h1 className="main-title">Welcome to our page!</h1>
          <div className="container-login">
          <div className="column-container">
            <p className="title">Try this!</p>
            <br />
            <LoginButton/>
            <br/> 
            <button className="button" onClick={() => loginWithRedirect({ authorizationParams:{ screen_hint: 'signup'}})}>Sign Up</button>
          </div>
        </div>
        </div>
        )}
    </div>
  );
}

export default App;