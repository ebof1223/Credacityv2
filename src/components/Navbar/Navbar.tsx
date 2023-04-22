import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { type ChangeEvent, useContext } from "react";
import profile from "~/assets/images/user.jpeg";
import { DataContext } from "~/pages/DataContext";
import cards__mock from "~/data/cards__mock";

const Navbar = () => {
  const user = useUser();
  const { display, setDisplay } = useContext(DataContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cards = [...cards__mock];
    const { value } = e.target;

    setDisplay(
      cards.filter(
        (card) =>
          card.name.toLowerCase().includes(value.toLowerCase()) ||
          card.issuer.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <div className="navbar border-b-[1px] border-slate-500 bg-base-100 ">
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
            onChange={(e) => {
              handleChange(e);
            }}
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
                  <Image src={profile} alt="user" width={500} height={500} />
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
    </div>
  );
};
export default Navbar;
