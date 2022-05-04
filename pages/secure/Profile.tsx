/* eslint-disable @next/next/no-img-element */
//const Comm = dynamic((() => import("./Comm")) as any)
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Comm from "../../components/Comm";
import { useSession } from "next-auth/react";
import { useGetUserDataQuery, useGetPostByUserQuery } from "../../redux/services/apiService";
import Link from "next/link";
import {useRouter} from "next/router"

export default function Profile() {
  const [avatar, setAvatar] = useState(""); // inside will go an api reference for an image
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const email = session && session.user.email;
  const [userData, setUserData] = useState<Array<Partial<userData>>>([]);



  const { data: allpostsbyuser = [], isLoading: userloading, isSuccess: userPostFetchDone } = useGetPostByUserQuery();
  userPostFetchDone && console.log(allpostsbyuser)
  interface userData { 
    name: string;
    email: string;
    image: string;
    awards: [];
  }

  const router = useRouter();
  const pathname = router.pathname;
  // {isSuccess && data.map(item => (
  //          <form key={item._id} className="text-black">
  //           <label htmlFor="name" className="">Name:</label><br/>
  //          <input id="name" value={item.name}/> <br/>
  //          <label htmlFor="name" className="">Email:</label><br/>
  //          <input id="name" value={item.name}/> <br/>
  //          <label htmlFor="name" className=""></label><br/>
  //          <input id="name" value={item.name}/> <br/>
  //          <label htmlFor="name" className="">Name:</label><br/>
  //          <input id="name" value={item.name}/> <br/>
  //          </form>
  //        ))} to be used for user settings

  const {isLoading, isSuccess, data} = useGetUserDataQuery();
  
  return (
    <>
      <div className="">
        <ul className="flex justify-around items-center text-md p-3">
          <li>Posts</li>
          <li>Comments</li>
          <li>Awards given</li>
          <li>Awards received</li>
        </ul>
        <hr className="pb-3" />
      </div>


      <div className="container grid grid-cols-12 gap-4 max-h-screen m-10">
        <div></div>
        <div></div>
        <div
          className="col-span-7  border solid white rounded-md"
        >
      
        {isLoading && (
          <div>
            <p className="text-xl">Loading...</p>
          </div>
        )}
        {isSuccess &&
          data.map((item: any) => (
            <Link
              key={item.id}
              href={`${pathname}/${item._id}`}
              passHref
            >
              <li
                key={item.id}
                className="grid mb-10 h-auto grid-cols-12 shadow-xl hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105 max-h-96 word-wrap list-none"
              >
                <div className="col-span-1 pt-3 flex flex-col min-h-full">
                  <button className="mb-2">upvote</button>
                  {item.lightpoints}
                  <button className="mt-2">downvote</button>
                </div>
                <div className="col-span-11 p-3 text-left min-h-full overflow-hidden word-wrap">
                  <div className="flex justify-between className text-xs">
                    <p>{item.topic}</p>
                    <p>
                      Posted by <a href="">{item.user}</a>
                    </p>
                  </div>
                  <h1 className="text-xl">{item.title}</h1>
                  <div className="mt-2 mb-5 text-left">
                    <p className=" text-ellipsis overflow-hidden transition-opacity">
                      {item.text}
                    </p>
                </div>
                </div>
              </li>
            </Link>
          ))}
      
     
         
        </div>
        {isSuccess && data.map(item => (
          <div key = {item.id} className="border-2 border-white solid block rounded-md p-3">
          <div className="p-3">
            <img
              src="https://www.improvutopia.com/wp-content/uploads/2016/02/empty.png-300x225.jpeg"
              width="150"
              height="150"
              alt="av rplacemnet"
            />
          </div>
          <h2 className="text-3xl">{item.name}</h2>
          <div className="grid grid-cols-2 gap-5 p-5">
          <div>
            <p>LightUnits</p>
            324
          </div>
          <div>
            <p>LightUnits</p>
            324
          </div>
          <div>
            <p>LightUnits</p>
            324
          </div>
         </div>
         </div>
        ))}
        
       </div>
    
    </>
  );
}
