import { ComemntView } from "../cmps/PostPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { Link } = ReactRouterDOM;





export function CommentList({  post }) {
    return (
        <section>
           {post.comments.map(comment => {
                if (!post) return <div>dont work</div>
                return <div key={post.at} >
<div ><Link className="bold link" to={`/post/user/${comment.by._id}`}>
                    {comment.by.fullName} </Link> {comment.txt}</div>                    aderajoe
                    {/* {post.comments[0].txt} */}
                    {/* <EmailPreview email={email} /> */}
                    {/* <CommentView comment={comment} /> */}

                </div>
            })}
            {/* {posts[0]._id} */}
            {/* this works */}
            
        </section>
    )
}