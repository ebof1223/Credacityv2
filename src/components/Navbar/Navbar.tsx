import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { type ChangeEvent, useContext, useState } from "react";
import profile from "~/assets/images/user.jpeg";
import { DataContext } from "~/context/DataContext";
import cards__mock from "~/data/cards__mock";

const Navbar = () => {
  const user = useUser();
  const { display, setDisplay } = useContext(DataContext);
  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cards = [...cards__mock];
    const { value } = e.target;
    setSearch(value);
    setDisplay(
      cards.filter(
        (card) =>
          card.name.toLowerCase().includes(value.toLowerCase()) ||
          card.issuer.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = "";
    setSearch("");
    //this will eventuall change too all the cards filtered by checks
    setDisplay([]);
  };

  console.log(display);

  return (
    <div className="navbar border-b-[1px] border-slate-500 bg-base-100 ">
      <div className="flex-1">
        <a className="btn-ghost btn font-serif text-xl normal-case">churn.io</a>
      </div>
      <div className="form-control mr-6">
        <div className="dropdown">
          <input
            type="text"
            placeholder="Search"
            className="input-bordered input w-52"
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => handleBlur(e)}
          />
          {search && (
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
            >
              {display.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <div>
                    <Image
                      loader={() =>
                        "https://www.offeroptimist.com/" + item.imageUrl
                      }
                      src={"https://www.offeroptimist.com/" + item.imageUrl}
                      width={50}
                      height={50}
                      alt="test"
                    />
                    <a>{item.name}</a>
                  </div>
                </li>
              ))}
              {display.length > 5 && (
                <li>
                  <a className="justify-center text-xs">See more results</a>
                </li>
              )}
              {!display.length && search && (
                <li>
                  <sub className="pointer-events-none justify-start text-xs">
                    No results found
                  </sub>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
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
                  <Image src={profile} alt="user" />
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
