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
        <button className="btn-post-preview-more-comments"> View all {post.comments.length} comments</button>
        <CommentsPreview comments={post.comments} />
        <div className="post-preview-at">2 DAYS AGO </div>
        {/* <button onClick={getElapsedTime}> get time</button> */} 
      
</section>
<div className="new-comment">
<input type="text" name="new-comment-input" placeholder="Add a comment..."></input>
<button className="btn-new-comment">Post</button>
</div>
    </div>

    )
}


