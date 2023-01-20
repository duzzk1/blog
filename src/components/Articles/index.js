import Posts from "../Posts";

const Article = () => {
  // Create a requisition for an API.

  return (
    <section className="container">
      <h1 className="tac">Articles</h1>
      <div className="container-posts mt-4">
        <Posts
          subtitle="tecnologia"
          title="O primeiro post do blog"
          creatorName="Eduardo Luis"
        >
          1oioioio oiuoio
        </Posts>
        <Posts
          subtitle="fotografia"
          title="O segundo post do blog"
          creatorName="Eduardo Santos"
        >
          2oioioio oiuoio
        </Posts>
        <Posts
          subtitle="cinema"
          title="O terceiro post do blog"
          creatorName="Duzzk"
        >
          3oioioio oiuoio
        </Posts>
      </div>
    </section>
  );
};

export default Article;
