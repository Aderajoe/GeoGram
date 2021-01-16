
const { Link } = ReactRouterDOM;

export function UserPostPreview({ post }) {
    if (!post.imgUrl) return <div className="hello">Loading.. picture</div>;
        
        return( <img src={post.imgUrl} alt="Image not available" width="500" height="600"></img>  )
}