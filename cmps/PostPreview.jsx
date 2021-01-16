import { CommentsPreview } from "../cmps/CommentsPreview.jsx"

const { Link } = ReactRouterDOM;

export function PostPreview({ post }) {

    return (  <div>
<div>

            <Link className="post-view" to={`/post/${post._id}`}>

        <img src={post.imgUrl} alt="Image not available" width="500" height="600"></img>
            </Link>

        <div>like and more options </div>
        <div>how many likes -- {post.likes.length}</div>
            <Link className="post-view" to={`/post/user/${post.by._id}`}>

        <div>who posted, and what is the txt -- {post.by.fullName} -- {post.txt}</div>
        <div>how many comments there is, and how to watch them -- {post.comments.length}</div>
            </Link>
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
</div>         

    )
}


