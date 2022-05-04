export {};
import { useState, useEffect } from "react";
import axios from "axios"
import styles from "../styles/Topics.module.css"


const Post = () => {


  const [blogdata, setBlogdata] = useState<any>([]);
  const [topicFilter, setTopicFilter] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [likeboolean, setLikeboolean] = useState(false);

  

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/Posts")
      .then((data) => setBlogdata([data.data]))
      .then(res2 => console.log(blogdata))
      .catch((error) => console.log(error));
  }, []);

  const returner = topicFilter
    ? blogdata.filter((blog: { topic: any; }) => blog.topic === topicFilter)
    : blogdata;
  let liker = likeboolean ? likes + 1 : likes;

  return (
    <div className="grid grid-cols-10 relative top-20" key="blogkey">
      <div></div>
      <div></div>
      <div className="col-span-4" id="blogsid">
        {returner.map((item: any) => (
          /* <li className="list-style-none shadow-xl mb-5 mt-5 p-5 hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105 max-h-48 overflow-hidden word-wrap">
          <h3 className="text-xl mb-2">{item.title}</h3>
          <h4 className="text-base mb-2">{item.topic}</h4>
          <p className="mb-2 overflow-hidden max-h-24 whitespace-nowrap text-ellipsis">{item.content}</p>
          <p>Written by {item.author}</p>
          </li>*/

          <li key={item.id} className="flex list-style-none shadow-xl mb-5 mt-5 p-5 hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105 max-h-48   word-wrap">
            <div className="relative right-2">
              <p className="relative top-2 text-xl font-bold">{liker}</p>
              <button
                className="relative top-7"
                onClick={() => setLikeboolean(!likeboolean)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-heart-fill bg-white relative"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </button>
            </div>
            <div className=" overflow-hidden word-wrap">
              <h3 className="text-xl mb-2">sfsfsfssfs</h3>
              <h4 className="text-base mb-2">sfsfsfsfsfs</h4>
              <p className="mb-2 overflow-hidden max-h-24 whitespace-nowrap text-ellipsis">
                fjsljf sjflsfjskl fsdkljfskldjfklds jklfksdj
                m,f./dszjklfdzkj;flk zjkdl saofjiojdsioroipfsj eiouf9hj
                wioupfhiopuewhfhkldewd fjkladshfjkl;dsj hjk f erwkofbneklqw
                nfkjladwvnkjmads jklhasd iojfjhewh klcewh klf jksdh fkjldsh
                fjkldsajf adsjkfh owief lasj djkfhads klfj adshjfh iodsjh
                fiodsjfjkl;dsah hjksd hokfj sdifhsjkhfsdfn sdkjf jksdf
                njkladshfhslfj asiljf sodlfj slijfsljflsijflas fioadj s
              </p>
              <p>Written by fsfssf</p>
            </div>
          </li>
        ))}
      </div>
      <div></div>
      <div className="col-span-1 border-2 border-white rounded-md">
        <div className={styles.filterbuttons}>
        <button onClick={() => setTopicFilter(false)} className="p-1">
          Remove filter
        </button><br/>
        <button onClick={() => setTopicFilter("Philosophy")} className="p-1">
          Philosophy
        </button><br/>
        <button onClick={() => setTopicFilter("Buddhism")} className="p-1">
          Buddhism
        </button><br/>
        <button onClick={() => setTopicFilter("Atheism")} className="p-1">
          Atheism
        </button><br/>
        <button onClick={() => setTopicFilter("Ethics")} className="p-1">
          Ethics
        </button><br/>
        <button onClick={() => setTopicFilter("Islam")} className="p-1">
          Islam
        </button>
      </div>
      </div>
    </div>
  );
};

export default Post;
