const { Link } = ReactRouterDOM;


export function CommentsPreview({ comments }) {

    function getLastComment(comments) {
        if (comments.length > 0) {
            let comment = comments[comments.length - 1]
            return (
                <div ><Link className="bold link" to={`/post/user/${comment.by._id}`}>
                    {comment.by.fullName} </Link> {comment.txt}</div>
            )
        }
    }
    function anotherLastCommentPreview(comments) {
        if (comments.length > 1) {
            let comment = comments[comments.length - 2]
            return (
                <div > <Link className="bold link" to={`/post/user/${comment.by._id}`}>
                    {comment.by.fullName} </Link> {comment.txt}   </div>
            )
        }
    }

    return (
        <div  >
            <div>
                {anotherLastCommentPreview(comments)}
                {getLastComment(comments)}
            </div>
        </div>
    )
}