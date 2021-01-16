import { CommentsPreview } from "../cmps/CommentsPreview.jsx"

const { Link } = ReactRouterDOM;

export function PostPreview({ post }) {
    function getElapsedTime() {
        console.log(post.at + "posted at")
        console.log(Date.now() + "the time now")




        var elapsedTime = Date.now() - post.at
        console.log(elapsedTime)
        elapsedTime = elapsedTime / 1000
        console.log(elapsedTime)

    }
    return (<div className="post-preview-main-container">

        <Link className="post-view" to={`/post/${post._id}`}>

            <img src={post.imgUrl} alt="Image not available" width="500" height="600"></img>
        </Link>
<section className="post-preview-details">

        <div>like and more options </div>
        <div className="bold"> {post.likes.length} likes</div>
        <div>  <Link className="post-view link" to={`/post/user/${post.by._id}`}>
            <span className="user-name bold">  {post.by.fullName}</span></Link>  {post.txt}</div>
        <div> View all {post.comments.length} comments</div>
        <CommentsPreview comments={post.comments} />
        <div className="hello">how much time ago was posted </div>
        <button onClick={getElapsedTime}> get time</button>
        <div>add comment</div>
        <div className="post-preview-head post-preview-text">
            <h1 className="post-preview-sent-to post-preview-text"></h1>
            <h5 className="post-preview-subject post-preview-text"></h5>
        </div>
</section>
<div className="new-comment">
<input type="text" name="new-comment-input" placeholder="Write new comment"></input>
<button className="btn-new-comment">Post</button>
</div>
    </div>

    )
}


