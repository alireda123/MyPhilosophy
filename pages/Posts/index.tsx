import Link from "next/link";

export default function Topics() {
  const topics = [
    {
      topic: "Aristotelian",
      id: 1,
      posts: Math.floor(Math.random() * 1000),
    },
    {
      topic: "Islamic",
      id: 2,
      posts: Math.floor(Math.random() * 1000),
    },
    {
      topic: "21st Century",
      id: 3,
      posts: Math.floor(Math.random() * 1000),
    },
    {
      topic: "Roman",
      id: 4,
      posts: Math.floor(Math.random() * 1000),
    },
  ];

  return (
    <div
      className="grid grid-cols-10 relative top-20 min-h-screen"
      key="blogkey"
    >
      <div></div>
      <div></div>
      <div className="col-span-4" id="blogsid">
        {topics.map((item: any) => (
          <Link key={item.id} href={`Posts/${item.topic.split(" ").join("")}`} passHref>
            <li className="mb-5 py-10 mt-5 p-5 shadow-xl hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105 max-h-48 word-wrap list-none">
              <h1>{item.topic}</h1>
              <p>Number of posts: {item.posts}</p>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}
