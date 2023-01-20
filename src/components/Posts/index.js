const Posts = (props) => {
  return (
    <div className="post mx-2">
      <div className="img-posts"></div>
      <h5>{props.subtitle}</h5>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile  ml-2">
          <h6 className="color-blue">{props.creatorName}</h6>
          <p>Jan 18, 2023 - 2 min read</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
