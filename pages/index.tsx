import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";


const Home: NextPage = () => {

  

  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
      <div className="h-full">
      <div className="body h-screen">
        
      </div>
    </div>

  )};

export default Home;
