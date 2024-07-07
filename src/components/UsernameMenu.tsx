import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useUser } from "@clerk/clerk-react"; // Import the useUser hook
import { Link } from "react-router-dom";

const UsernameMenu = () => {
  const { user } = useUser(); // Use the useUser hook to get the user object

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.emailAddresses[0].emailAddress} {/* Display the user's email */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to="/user-profile">
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
