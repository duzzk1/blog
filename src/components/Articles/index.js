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
          date="Jan 18, 2023"
          readTime="- 2 min read"
        >
          1oioioio oiuoio
        </Posts>
        <Posts
          subtitle="fotografia"
          title="O segundo post do blog"
          creatorName="Eduardo Santos"
          date="Jan 18, 2023"
          readTime="- 5 min read"
        >
          2oioioio oiuoio
        </Posts>
        <Posts
          subtitle="cinema"
          title="O terceiro post do blog"
          creatorName="Duzzk"
          date="Jan 18, 2023"
          readTime="- 3 min read"
        >
          3oioioio oiuoio
        </Posts>
      </div>
    </section>
  );
};

export default Article;
