const Posts = () => {
  return (
    <div className="post mx-2">
      <div className="img-posts"></div>
      <h5>Tech</h5>
      <h3>O primeiro post do blog</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile  ml-2">
          <h6 className="color-blue">Eduardo Santos</h6>
          <p>Jan 18, 2023 - 2 min read</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
