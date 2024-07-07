import { useAuth, useUser } from "@clerk/clerk-react";
import { useCreateMyUser } from "../../api/MyUserApi";
import { useEffect, useRef, Suspense, lazy } from "react";
const ClerkProvider = lazy(() =>
  import("@clerk/clerk-react").then((module) => ({
    default: module.ClerkProvider,
  }))
);

type Props = {
  children: React.ReactNode;
};

const ClerkProviderwithNavigate = ({ children }: Props) => {
  // Import your publishable key
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <UserCreationHandler>{children}</UserCreationHandler>
      </ClerkProvider>
    </Suspense>
  );
};

const UserCreationHandler = ({ children }: Props) => {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  // const [isUserCreated, setIsUserCreated] = useState(false);
  const isUserCreated = useRef(false);
  const { createUser } = useCreateMyUser();
  const userEmail = user?.emailAddresses[0].emailAddress;

  useEffect(() => {
    if (isLoaded && userId && userEmail && !isUserCreated.current) {
      createUser({
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
      })
        // .then(() => setIsUserCreated(true))
        .then(() => {
          isUserCreated.current = true;
        })
        .catch((err) => console.error(err));
      // navigate("/auth-callback");
    }
  }, [isLoaded, userId, user, createUser, isUserCreated]);

  return <>{children}</>;
};

export default ClerkProviderwithNavigate;
