import { PostPreview } from "../cmps/PostPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;





export function PostList({ posts }) {
    return (
        <section>
           {posts.map(post => {
                if (!post) return <div>dont work</div>
                return <div key={post._id}>
                    <PostPreview post={post} />

                </div>
            })}

            
        </section>
    )
}