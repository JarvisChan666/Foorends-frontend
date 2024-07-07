import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  useAuth,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

import { CircleUserRound } from "lucide-react";
import { useUser } from "@clerk/clerk-react"; // Import the useUser hook
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user } = useUser(); // Use the useUser hook to get the user object

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.emailAddresses[0].emailAddress} {/* Display the user's email */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
            <SignOutButton>
                <Button className="flex flex-1 font-bold bg-orange-500">
                    LogOut
                </Button>
            </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
