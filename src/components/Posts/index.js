const Posts = (props) => {
  // PROPS
  const desc = props.children;
  const subtitle = props.subtitle;
  const title = props.title;
  const readTime = props.readTime;
  const date = props.date;
  // PAGE
  return (
    <div className="post mx-2">
      <div className="img-posts"></div>
      <h5>{subtitle}</h5>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile  ml-2">
          <h6 className="color-blue">{props.creatorName}</h6>
          <p>
            {date} {readTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
