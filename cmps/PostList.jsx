import { PostPreview } from "../cmps/PostPreview.jsx"

export function PostList({ posts, userLogged, onRemove }) {
    return (
        <section className="post-list">
            {posts.map(post => {
                if (!post) return <div>loading..</div>
                return <div key={post._id}>
                    <PostPreview post={post} userLogged={userLogged} onRemove={onRemove} />
                </div>
            })}
        </section>
    )
}