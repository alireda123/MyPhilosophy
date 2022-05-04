import { useGetPostByUserQuery } from "../../redux/services/apiService";
import { useState } from "react";
import {useSession} from "next-auth/react"

export default function Users() {
  const [blogdata, setBlogdata] = useState<any>([]);
  const [topicFilter, setTopicFilter] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [likeboolean, setLikeboolean] = useState(false);

  const {data: session} = useSession()
  const { data, isLoading, isSuccess } = useGetPostByUserQuery();
  const returner = topicFilter
    ? blogdata.filter((blog: { topic: any }) => blog.topic === topicFilter)
    : blogdata;
  let liker = likeboolean ? likes + 1 : likes;

  return (
    <>
      {isLoading && <p>loading...</p>}

      <div className="grid grid-cols-10 relative top-20" key="blogkey">
        <div></div>
        <div></div>
        <div className="col-span-4" id="blogsid">
          {isSuccess &&
            data.map((item: any) => (
              <>
                <li
                  key={item.id}
                  className="flex list-style-none shadow-xl mb-5 mt-5 p-5 hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105 max-h-48   word-wrap"
                >
                  <div className="relative right-2">
                    <p className="relative top-2 text-xl font-bold">{1}</p>
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
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <h4 className="text-base mb-2">{item.topic}</h4>
                    <p className="mb-2 overflow-hidden max-h-24 whitespace-nowrap text-ellipsis">
                      {item.content}
                    </p>
                    <p>{item.user}</p>
                  </div>
                </li>
              </>
            ))}
        </div>
        <div></div>
      </div>
    </>
  );
}
