import { ComemntView } from "../cmps/PostPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;





export function CommentList({  posts }) {
    return (
        <section>
           {posts.map(post => {
                if (!post) return <div>dont work</div>
                return <div >
                    {/* key={post.comments.by._id} */}
                    aderajoe
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