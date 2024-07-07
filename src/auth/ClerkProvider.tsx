import { ClerkProvider } from "@clerk/clerk-react";

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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>{children}</ClerkProvider>
  );
};

export default ClerkProviderwithNavigate;
