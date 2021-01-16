import { CommentsPreview } from "../cmps/CommentsPreview.jsx"

const { Link } = ReactRouterDOM;

export function PostPreview({ post }) {

    return (<div className="post-preview-main-container">

        <Link className="post-view" to={`/post/${post._id}`}>

            <img src={post.imgUrl} alt="Image not available" width="500" height="600"></img>
        </Link>

        <div>like and more options </div>
        <div className="bold"> {post.likes.length} likes</div>

        <div>  <Link className="post-view link" to={`/post/user/${post.by._id}`}>
            <span className="user-name bold">  {post.by.fullName}</span></Link>  {post.txt}</div>

        <div> {post.comments.length} comments</div>
        <CommentsPreview comments={post.comments} />

        <div>last 2 comments
            {/* <div>{post.comments}</div> */}
            <div></div>

        </div>
        <div>how much time ago was posted</div>
        <div>add comment</div>
        <div className="post-preview-head post-preview-text">
            <h1 className="post-preview-sent-to post-preview-text"></h1>
            <h5 className="post-preview-subject post-preview-text"></h5>
        </div>
        <h5 className="post-preview-body" ></h5>
    </div>

    )
}


