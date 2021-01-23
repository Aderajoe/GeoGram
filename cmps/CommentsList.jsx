import { ComemntView } from "../cmps/PostPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { Link } = ReactRouterDOM;





export function CommentList({ post }) {
    return (
        <section className="comments">
            <div className="full-comment" ><img className="img-user" src={post.by.imgUrl} alt="Image not available"></img>
                        <div className="name-txt"><Link className="bold link" to={`/post/user/${post.by._id}`}>
                            {post.by.fullName} </Link> {post.txt} </div></div>
                
            {post.comments.map(comment => {
                if (!post) return <div>dont work</div>
                return <div key={post.at} className="full-comment">
                    <img className="img-user" src={comment.by.imgUrl} alt="Image not available"></img>
                      <div className="name-txt">  <Link className="bold link" to={`/post/user/${comment.by._id}`}>
                            {comment.by.fullName} </Link> {comment.txt}</div>
                </div>
            })}
        </section>
    )
}