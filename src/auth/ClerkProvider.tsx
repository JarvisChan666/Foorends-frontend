import { ClerkProvider, useAuth, useUser } from "@clerk/clerk-react";
import { useCreateMyUser } from "../../api/MyUserApi";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ClerkProviderwithNavigate = ({ children }: Props) => {
  const { createUser } = useCreateMyUser();
  // Import your publishable key
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  const handleUserCreation = (
    userId: string,
    userEmail: string | undefined
  ) => {
    if (userId && userEmail) {
      createUser({ clerkId: userId, email: userEmail });
    }
  };

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <UserCreationHandler onUserCreation={handleUserCreation}>
        {children}
      </UserCreationHandler>
    </ClerkProvider>
  );
};

const UserCreationHandler = ({ children, onUserCreation }) => {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const [isUserCreated, setIsUserCreated] = useState(false);
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    if (isLoaded && userId && user && !isUserCreated) {
      createUser({ clerkId: userId, email: user.emailAddresses[0].emailAddress })
        .then(() => setIsUserCreated(true))
        .catch((err) => console.error(err));
    }
  }, [isLoaded, userId, user, createUser, isUserCreated]);

  return <>{children}</>;
};

export default ClerkProviderwithNavigate;
