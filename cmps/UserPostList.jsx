import { UserPostPreview } from "./UserPostPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;





export function UserPostList({ posts }) {
    if (!posts) return <div>dont work</div>
   function checkState(){
        console.log(posts)
    }
    checkState()
    return (
        <section>
    {posts.map(post => {
                if (!post) return <div>dont work</div>
                return <div key={post._id}>
                    <UserPostPreview post={post} />

                </div>
            })}
            post list
        </section>
    )
}