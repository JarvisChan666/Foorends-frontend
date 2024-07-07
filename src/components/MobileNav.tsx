import { Menu, CircleUserRoundIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { SignInButton, useAuth, useUser } from "@clerk/clerk-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { userId } = useAuth();
  const { user } = useUser(); // Use the useUser hook to get the user object

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {userId ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRoundIcon className="text-orange-500" />
              {user?.emailAddresses[0].emailAddress}
            </span>
          ) : (
            <span>Welcome to Foorends!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {userId ? (
            <MobileNavLinks />
          ) : (
            <SignInButton>
              <Button
                variant="ghost"
                className="font-bold hover:text-orange-500 hover:bg-white"
              >
                Login
              </Button>
            </SignInButton>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
