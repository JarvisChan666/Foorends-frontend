import { useAuth, useUser } from "@clerk/clerk-react";
import { useCreateMyUser } from "../../api/MyUserApi";

import { useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user } = useUser();
  const {  userId } = useAuth();
  const isUserCreated = useRef(false);
  const { createUser } = useCreateMyUser();
  const userEmail = user?.emailAddresses[0].emailAddress;
  const navigate = useNavigate();

  // Run only once
  useEffect(() => {
    if (userId && userEmail && !isUserCreated.current) {
        // Create user and save it to our mongodb
      createUser({
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
      })
        // .then(() => setIsUserCreated(true))
        .then(() => {
          isUserCreated.current = true;
        })
        .catch((err) => console.error(err));
    }
    navigate('/');
  }, [userId, user, createUser, isUserCreated]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
