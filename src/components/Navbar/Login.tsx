import { SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";

const Login = () => {
  const user = useUser();
  return (
    <div className="flex-none gap-2">
      {!user.isSignedIn && (
        <SignInButton>
          <button className="btn-ghost btn">Sign in</button>
        </SignInButton>
      )}
      {!!user.isSignedIn && (
        <div className="dropdown-end dropdown">
          <div className="mx-4">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <Image
                  loader={() => user.user.profileImageUrl}
                  src={user.user.profileImageUrl}
                  alt="user"
                  width={200}
                  height={200}
                />
              </div>
            </label>
          </div>
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a className="justify-between" tabIndex={0}>
                Profile
              </a>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Login;
