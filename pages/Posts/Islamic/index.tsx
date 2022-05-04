import { useGetPostByTopicQuery } from "../../../redux/services/apiService";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Tfcentury() {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname)
  const { isLoading, isSuccess, data } = useGetPostByTopicQuery(pathname);
  console.log(data);
  return (
    <div
      className="grid grid-cols-10 relative top-20 min-h-screen"
      key="blogkey"
    >
      <div></div>
      <div></div>
      <div className="col-span-4" id="blogsid">
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
                className="grid mb-10 h-96 grid-cols-12 shadow-xl hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105 max-h-96 word-wrap list-none"
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
    </div>
  );
}
