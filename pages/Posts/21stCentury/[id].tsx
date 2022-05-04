import { useGetPostByIdQuery } from "../../../redux/services/apiService";
import {useRouter} from "next/router";


export default function FullPost(){
    const router = useRouter();
    const query = router.query
    const pathname = router.pathname;
    const id = query.id
    console.log(pathname)
    const {isLoading, isSuccess, data} = useGetPostByIdQuery(`21stCentury/${id}`);
    
    console.log(query.id)
    

    return(
        
   
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
          {isLoading && <p>loading...</p>}
          {isSuccess &&
            data.map((item) => (
              <li
                key={item.id}
                className="grid mb-10 h-auto grid-cols-12  shadow-xl hover:shadow-2xl hover:custom word-wrap list-none"
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
                    <p className="">
                      {item.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </div>
      </div>
   
  );
    


}