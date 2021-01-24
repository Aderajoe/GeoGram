import { UserPostPreview } from "./UserPostPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;





export function UserPostList({ posts }) {
    if (!posts) return <div>dont work</div>
    function checkState() {
        console.log(posts)
    }
    checkState()
    return (
        <section className="post-list">
            {posts.map(post => {
                if (!post) return <div>dont work</div>
                return <div key={post._id}>
                    <UserPostPreview post={post} />
                    {/* <button onClick={checkState}></button>
<button onClick={console.log(post)}>check post at render</button>
                    post list {post._id} */}
                </div>
            })}
        </section>
    )
}