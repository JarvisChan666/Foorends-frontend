import { useAuth, SignInButton } from "@clerk/clerk-react";
import UsernameMenu from "./UsernameMenu";
import { Button } from "./ui/button";

const MainNav = () => {
  const { isLoaded, userId } = useAuth();
  if (!isLoaded) {
    return null;
  }

  // Check if user has login
  if (userId) {
    return <UsernameMenu />;
  } else {
    return (
      <header>
        {/* <SignedIn>
          
        </SignedIn> */}
        <SignInButton>
          <Button
            variant="ghost"
            className="font-bold hover:text-orange-500 hover:bg-white"
          >
            Login
          </Button>
        </SignInButton>
      </header>
    );
  }

  /* <SignedOut>
        <SignInButton />
      </SignedOut> */
};

export default MainNav;
