import { CommentsPreview } from "../cmps/CommentsPreview.jsx"

const { Link } = ReactRouterDOM;

export function UserPreview({ user }) {

    return (<div className="post-review-user-details">
        <Link className="user-preview-img-ling link" to={`/post/user/${user._id}`}>
            <img src={user.imgUrl} className="img-user-preview" alt="Image not available" ></img>
        </Link>
        <Link className="user-preview-name link" to={`/post/user/${user._id}`}>
            {user.fullName}
        </Link>
    </div>

    )
}

