/* eslint-disable require-jsdoc */
import Link from "next/link";
import styles from "../styles/LayoutComponents/Navbar.module.css";
import Image from "next/Image";

export default function Navbar() {
  return (
    <div>
    <div className="flex justify-between items-center ">
        <Link href="/"><a><h1 className="text-3xl">MyPhilosophy</h1></a></Link>
        <div className="relative border-2 border-white solid border-collapse rounded-md">
        <input type="search" className="border-2 rounded-md pr-48 pl-48 h-10 z-0 focus:border-0" />
        <button className="searchbutton pr-4 pl-4 h-10" onClick={() => console.log("hello")}><Image src="/../public/search.png" width="17px" height="17px" alt="search icon"></Image></button>
        </div>
        <nav className="NavbarButtons p-4 pt-4 ">
        <Link href="/"><a className="pl-3 pr-3">Notifications</a></Link>
        <Link href="/"><a  className="pl-3 pr-3">Topics</a></Link>
        <Link href="/"><a  className="pl-3 pr-3">Profile</a></Link>
        </nav>
    </div>
    <hr className="relative  border-white"/>
    </div>
  );
}
