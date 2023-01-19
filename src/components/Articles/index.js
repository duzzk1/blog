import Posts from "../Posts";

const Article = () => {
  return (
    <section className="container">
      <h1 className="tac">Articles</h1>
      <div className="container-posts mt-4">
        <Posts />
        <Posts />
        <Posts />
      </div>
    </section>
  );
};

export default Article;
