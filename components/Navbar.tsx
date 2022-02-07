/* eslint-disable require-jsdoc */
import Link from "next/link";
import styles from "../styles/LayoutComponents/Navbar.module.css";
import Image from "next/Image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const signingIn = () => {
    signIn();
  };

  const signingOut = () => {
    signOut();
  };

  return (
    <div>
      <div className="flex justify-between items-center ">
        <Link href="/">
          <a>
            <h1 className="text-3xl">MyPhilosophy</h1>
          </a>
        </Link>
        <div className="relative border-2 border-white solid border-collapse rounded-md text-black ">
          <input
            type="search"
            name="searchtopics"
            className="border-2 rounded-md h-10 w-96 active:border-0"
          />
          <button
            className="searchbutton pr-4 pl-4 h-10"
            onClick={() => console.log("hello")}
          >
            <Image
              src="/search.png"
              width="17px"
              height="17px"
              alt="search icon"
            ></Image>
          </button>
        </div>
        <nav className="NavbarButtons p-4 pt-4 ">
          {session && (
            <>
              <Link href="/PostCreation">
                <a className="pl-3 pr-3">Create Post</a>
              </Link>
              <Link href="/">
                <a className="pl-3 pr-3">Notifications</a>
              </Link>
            </>
          )}
          <Link href="/">
            <a className="pl-3 pr-3">Topics</a>
          </Link>
          {!session && (
            <>
              <Link href="/login">
                <button onClick={() => signingIn()} className="pl-3 pr-3">
                  Login
                </button>
              </Link>
            </>
          )}
          {session && (
            <>
              <Link href="/Profile">
                <a className="pl-3 pr-3">Profile</a>
              </Link>
              <Link href="/">
                <button onClick={() => signingOut()} className="pl-3 pr-3">
                  signout
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>
      <hr className="relative  border-white" />
    </div>
  );
}
