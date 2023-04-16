import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser();
  return (
    <div>
      {!user.isSignedIn && <SignInButton />}
      {!!user.isSignedIn && <SignOutButton />}
    </div>
  );
};
export default Navbar;
