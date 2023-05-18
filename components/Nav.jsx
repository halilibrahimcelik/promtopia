"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setProvidersFn = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setProvidersFn();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="logo"
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/*Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="image-profile"
                width={37}
                height={37}
                className="rounded-full "
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  className="black_btn"
                  key={provider.name}
                  type="button"
                  onClick={() => signIn(provider.id)}
                >
                  {" "}
                  SignIn
                </button>;
              })}
          </>
        )}
      </div>

      {/*Mobile Navigation */}

      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="image-profile"
              width={37}
              height={37}
              className="rounded-full cursor-pointer "
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link duration-300 ease-in transition-all"
                  onClick={() => setToggleDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {" "}
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  className="black_btn"
                  key={provider.name}
                  type="button"
                  onClick={() => signIn(provider.id)}
                >
                  {" "}
                  SignIn
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
