export {};

export const getStaticPaths = async () => {
  const first = await fetch("https://jsonplaceholder.typicode.com/todos");
  const second = await first.json();

  const paths = second.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: any; }; }) => {
  const id = context.params.id;
  const first = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const second = await first.json();

  return {
    props: { todos : second },
  };
};

const Details = ({todos}) => {
  return (
    <>
      <h1>{todos.title}</h1>
      <h1>{todos.completed.toString()}</h1>
    </>
  );
};

export default Details;
