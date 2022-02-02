import Link from "next/link";
export {};

const Fetcher = ({ todos }) => {
  return (
    <>
      <div>
        {todos.map((todos) => (
          <Link href={`/statics/` + todos.id} key={todos.id}>
            <p>{todos.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const first = await fetch("https://jsonplaceholder.typicode.com/todos");
  const second = await first.json();

  return {
    props: { todos: second },
  };
};

export default Fetcher;
