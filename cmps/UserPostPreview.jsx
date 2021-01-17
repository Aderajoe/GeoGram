
const { Link } = ReactRouterDOM;

export function UserPostPreview({ user }) {
  if (!user.imgUrls[0]) return <div className="hello">Loading.. picture</div>;

  return (<div className="other-users-img-preview">
    <Link className="user-preview-img-ling link" to={`/post/user/${user._id}`}>
      <img src={user.imgUrls[0]} className="users-img-preview" alt="Image not available" width="46" height="46"></img>
    </Link>
    <Link className="user-preview-name link" to={`/post/user/${user._id}`}>
      {user.fullName}
    </Link>
    <button className="btn-follow">Follow</button>
  </div>
  )
}