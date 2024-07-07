import {
  useAuth,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import UsernameMenu from "./UsernameMenu";


const MainNav = () => {
  const {isLoaded, userId, sessionId, getToken} = useAuth();
  if (!isLoaded){
    return null;
  }

  // Check if user has login
  if (userId) {
    return <UsernameMenu />
  } else {
    return (
    <header>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    )
  }
 
    
/* <SignedOut>
        <SignInButton />
      </SignedOut> */
  
};

export default MainNav;
