const { Link } = ReactRouterDOM;


export function CommentsPreview({ comments }) {

    function lastCommentPreview(coments) {
        if (coments.length > 0) {
            return (
            
                <div ><Link className="bold link" to={`/post/user/${comments[coments.length - 1].by._id}`}> 
                {comments[coments.length - 1].by.fullName} </Link> {comments[coments.length - 1].txt}</div>
           )
        }
    }
    function anotherLastCommentPreview(coments) {
        if (coments.length > 1) {
            return (
                <div > <Link className="bold link" to={`/post/user/${comments[coments.length - 2].by._id}`}> 
                {comments[coments.length - 2].by.fullName} </Link> {comments[coments.length - 2].txt}   </div>
            )
        }
    }

    return (
        <div  >
            <div>
                {anotherLastCommentPreview(comments)}
                {lastCommentPreview(comments)}
            </div>
        </div>
    )
}







// export function CommentsPreview({ comments }) {
//     // return (<section>
//     //     {comments.map(comment => {
//     //             if (!comment) return <div>dont work</div>
//     //             return <div key={email.id}>
//     //                 <EmailPreview email={email} />
//     //             </div>
//     //         })}



//         // {
//             comments.map(comments => {
//             if (!comment) return <div>dont work</div>
//             return <div></div>
//              <div key={comment.txt}>
//                 {/* <EmailPreview email={email} /> */}
//             </div>
//         })}
//         </section>
//     )
// }
