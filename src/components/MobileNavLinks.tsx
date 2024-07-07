import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignOutButton } from "@clerk/clerk-react";

const MobileNavLinks = () => {
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <SignOutButton>
        <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        >
          Logout
        </Button>
      </SignOutButton>
    </>
  );
};

export default MobileNavLinks;
