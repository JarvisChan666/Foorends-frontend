import { useMutation } from "react-query";

import { useAuth} from '@clerk/clerk-react';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  clerkId: string;
  email: string;
};


export const useCreateMyUser = () => {
  const {getToken} = useAuth();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const token = await getToken();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess
  }
};
// request encapsulate object
