import { useGetPostByIdQuery, useCreatePostCommentMutation } from "../../../redux/services/apiService";
import Router from "next/router";
import { useRouter } from "next/router";
import { useState } from "react";
import {useSession} from "next-auth/react";
import styles from "../../../styles/Topics.module.css";

export default function FullPost() {
  const router = useRouter();
  const query = router.query;
  const pathname = router.pathname;
  const id = query.id;

  const { isLoading, isSuccess, data } = useGetPostByIdQuery(`Islamic/${id}`);
  
  //for upvotes and downvotes
  const [light, setLight] = useState(false);
  const [dark, setDark] = useState(false);
  
  const [state, setState] = useState(0);
  
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(state);
  
  const [createComment, statusofPost] = useCreatePostCommentMutation();
  const [commentcontent, setCommentContent] = useState("");

  const commentChange = (e) => {
    setCommentContent(e.target.value);
  }
  console.log(session)
 
  const handlecommentSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(!session){
      Router.push("/login");
    }
    const comment = {
    title: data.title,
    image: "something",
    text: commentcontent,
    userName: session.user.name,
    dateposted: Date.now(),
    postId: id,
    userId: session.userId,
    lightpoints: 0,
    award: "not exist yet"
    };
    e.preventDefault();
    // axios
    //   .post("http://localhost:3000/api/Posts", post)
    //   .then((res) => console.log(res));
    createComment(comment);
  };


  return (
    <div
      className="grid grid-cols-10 relative top-20 min-h-screen"
      key="blogkey"
    >
      <div></div>
      <div></div>
      <div className="col-span-4" id="blogsid">
        <div className="wrapperforpostandcomments shadow-2xl">
          {isLoading && (
            <div>
              <p className="text-xl">Loading...</p>
            </div>
          )}
          {isLoading && <p>loading...</p>}
          {isSuccess &&
            data.map((item) => (
              <>
                <li
                  key={item.id}
                  className="grid mb-10 h-auto grid-cols-12 hover:custom word-wrap list-none"
                >
                  <div className="col-span-1 mt-3 max-w-fit  flex flex-col min-h-full">
                    <button
                      onClick={() => {
                        setLight(!light);
                        if (dark) {
                          setDark(false);
                        }
                        light === true
                          ? setState(item.lightpoints + 1)
                          : light === false && dark === false
                          ? setState(item.lightpoints)
                          : setState(item.lightpoints - 1);
                      }}
                      className={`${
                        light ? " shadow-xl shadow-yellow-200" : ""
                      } mb-2`}
                    >
                      upvote
                    </button>
                    {light
                      ? item.lightpoints + 1
                      : dark
                      ? item.lightpoints - 1
                      : item.lightpoints}
                    <button
                      onClick={() => {
                        setDark(!dark);
                        if (light) {
                          setLight(false);
                        }
                        dark === true
                          ? setState(item.lightpoints - 1)
                          : dark === false && light === false
                          ? setState(item.lightpoints)
                          : setState(item.lightpoints - 1);
                      }}
                      className={`${
                        dark ? " shadow-xl shadow-black" : ""
                      } mt-2`}
                    >
                      downvote
                    </button>
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
                      <p className="">{item.text}</p>
                    </div>
                  </div>
                </li>

                <div className="grid grid-cols-12 grid-rows-2 w-full">
                  <div></div>  
                    <textarea
                      className="col-span-10 text-black"
                      id="exampleFormControlTextarea1"
                      rows="6"
                      placeholder="Express your philosophical viewpoint..."
                      onChange={commentChange}
                    ></textarea> 
                    <div></div> 

                  <div className="startofsecondrow col-span-10"></div>
                  <div>
                    <button onClick = {handlecommentSubmit} className="bg-black p-2 mt-1 rounded-3xl relative right-8  px-8 text-white">Send</button>
                    </div>  
                  <div></div>  
                </div>

                <div className="commentsection">
                  
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
