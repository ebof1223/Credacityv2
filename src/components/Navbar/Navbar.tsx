import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
const Navbar = () => {
  const user = useUser();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn font-serif text-xl normal-case">
          Credacity
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input"
          />
        </div>
        {!user.isSignedIn && (
          <SignInButton>
            <button className="btn-ghost btn">Sign in</button>
          </SignInButton>
        )}
        {!!user.isSignedIn && (
          <div className="dropdown-end dropdown">
            <div>
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <Image
                    src="/assets/images/user.jpeg"
                    alt="user"
                    width={500}
                    height={500}
                  />
                </div>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
