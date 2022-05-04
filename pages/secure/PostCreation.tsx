/* eslint-disable react/jsx-no-undef */
export {};
import styles from "../../styles/PostCreation.module.css";
import axios from "axios";
import { MouseEvent, useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useCreatePostMutation } from "../../redux/services/apiService";

const PostCreation = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === "loading";

  interface postdata {
    title: string;
    content: {
      image: string,
      text: string
    };
    topic: string;
    user: string;
    dateposted: string;
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState({
    image: "",
    text: ""
  });
  const [topic, setTopic] = useState("");
  console.log(topic)
  const [createPost, statusofPost] = useCreatePostMutation();

  const handleChange = (e) => {
      const adaptchange = {image: "src value", text: e.target.value}
      setContent(content => ({
        ...content,
        ...adaptchange
      })
      )
      console.log(content)
  }
  const image = content.image;
  const text = content.text;
 
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    await session;
    const post = {
    title,
    image,
    text,
    topic,
    user: session.user.name,
    dateposted: Date.now(),
    lightpoints: Math.floor(Math.random() * 100)
    };
    e.preventDefault();
    // axios
    //   .post("http://localhost:3000/api/Posts", post)
    //   .then((res) => console.log(res));
    createPost(post);
    Router.push("/");
  };


  if (session) {
    return (
      <>
        <div className="grid grid-cols-7">
          <div></div>
          <div></div>
          <div className="col-span-3">
            <div className="mb-4 ">
              <h1 className="font-serif text-3xl font-bold underline ">
                Create Post
              </h1>
            </div>
            <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              <form method="POST" action="#">
                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="email"
                    placeholder="180"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {/* Description */}
                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Content
                  </label>
                  <textarea
                    name="description"
                    className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows={20}
                    placeholder="180"
                    defaultValue={""}
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="topics">Choose a topic</label>
                <br />
                <select
                  className="text-black"
                  name="topics"
                  id="cars"
                  defaultValue="Aristotelian"
                  onChange={(e) => setTopic(e.target.value)}
                  required
                >
                  <option value="Select" selected >Select a topic</option>
                  <option value="Aristotelian">Aristotelian</option>
                  <option value="Islamic">Islamic</option>
                  <option value="21stCentury">21st Century</option>
                  <option value="Roman">Roman</option>
                </select>
                <div className="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Save
                  </button>
                  <button
                    onClick = {() => router.push("/")}
                    className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>

      //   <div className="post-creation">
      //     <form className={styles.containerforpost}>
      //       <label htmlFor="topics">Choose a topic</label>
      //       <br/>
      //       <select className="text-black" name="topics" id="cars" onChange={(e) => setTopic(e.target.value)}>
      //           <option value="Aristotlelian">Aristotelian</option>
      //           <option value="Islamic">Islamic</option>
      //           <option value="21st Century">21st Century</option>
      //           <option value="Roman">Roman</option>
      //       </select>
      //       <h2 className="p-2 ">Title</h2>
      //       <input
      //         type="text "
      //         onChange={(e) => setTitle(e.target.value)}
      //         className="rounded-md w-96 h-10 text-black"
      //       />
      //       <h3 className="p-2">Content</h3>
      //       <textarea
      //         className="rounded-md text-black items-left text-left"
      //         onChange={(e) => setContent(e.target.value)}
      //         rows="22"
      //         cols="140"
      //         name="message"
      //       />
      //       <br />
      //       <button
      //         className="p-3 rounded-md bg-black"
      //         onClick={(e) => handleSubmit(e)}
      //       >
      //         Post
      //       </button>
      //     </form>
      //   </div>
      // );
    );
  } else {
    return () => router.push("api/auth/signin?");
  }
};

export default PostCreation;
