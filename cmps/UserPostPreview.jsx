
const { Link } = ReactRouterDOM;

export function UserPostPreview({ post }) {

  if (!post._id) return <div className="hello">Loading.. picture</div>;

  return (<div >
    <Link  to={`/post/user/${post._id}`}>
      <img src={post.imgUrl}  alt="Image not available" width="150" ></img>
    </Link>
    <Link className="user-preview-name link" to={`/post/user/${post._id}`}>
      {post.fullName}
    </Link>
  </div>
  )
}