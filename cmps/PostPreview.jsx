import { CommentsPreview } from "../cmps/CommentsPreview.jsx"
import { UserPreview } from "../cmps/userPreview.jsx"
import { dataServices } from "../services/postService.js"

const { Link } = ReactRouterDOM;

export class PostPreview extends React.Component {

    state = {
        post: this.props.post,
        userLogged: this.props.userLogged,
        isLiked: "heart.svg",
        commentTxt: ""
    }
    componentDidMount() {
        this.loadLike()
    }

    isLiked = (like) => {
        return (like._id === this.state.userLogged._id)
    }
    onLike = () => {
        let postCopy = this.state.post
        if (this.state.isLiked === "heart.svg") {
            let userDetails = {
                _id: this.state.userLogged._id,
                imgUrl: this.state.userLogged.imgUrls[0],
                fullName: this.state.userLogged.fullName
            }
            postCopy.likes.push(userDetails)
            this.setState({ post: postCopy })
            this.setState({ isLiked: "red-heart.svg" })
        } else {
            let likes = postCopy.likes.map(like => {
                if (like._id === this.state.userLogged._id) {
                    return false
                } else {
                    return like
                }
            });
            postCopy.likes = likes.filter(like => like)
            this.setState({ post: postCopy })
            this.setState({ isLiked: "heart.svg" })
        }
    }
    loadLike = () => {
        if (this.state.post.likes.length > 0) {
            let likes = this.state.post.likes.filter(this.isLiked)
            if (likes.length > 0) {
                return this.setState({ isLiked: "red-heart.svg" })
            }
        }
    }
    onWriteComment = (ev) => {
        let newTxt = ev.target.value
        this.setState({ commentTxt: newTxt })
    }
    onAddComment = () => {
        let postCopy = this.state.post
        let newTxt = this.state.commentTxt
        let newComment = {
            by: {
                _id: this.state.userLogged._id,
                imgUrl: this.state.userLogged.imgUrls[0],
                fullName: this.state.userLogged.fullName
            },
            txt: newTxt,
            at: Date.now()
        }
        postCopy.comments.push(newComment)
        this.setState({ post: postCopy })
    }


    render() {

        return (<div className="post-preview-main-container">
            <UserPreview user={this.state.post.by} />
            <Link to={`/post/${this.state.post._id}`}>
                <img src={this.state.post.imgUrl} alt="Image not available" className="post-img"></img>
            </Link>
            <section className="post-preview-details">
                <div className="post-options">
                    <button className="btn-post-options-like" onClick={this.onLike}>
                        <img className="post-options-like" src={`/assets/imgs/${this.state.isLiked}`} ></img>
                    </button>
                    <img className="post-options-comments" src="assets\imgs\comments.svg"></img>
                    <img className="post-options-save" src="assets\imgs\save.svg"></img>
                </div>
                <div className="bold"> {this.state.post.likes.length} likes</div>
                <div>
                    <Link className="post-view link" to={`/post/user/${this.state.post.by._id}`}>
                        <span className="bold">  {this.state.post.by.fullName}</span></Link>  {this.state.post.txt}</div>
                <Link className="post-preview-more-comments link" to={`/post/${this.state.post._id}`}> View all {this.state.post.comments.length} comments</Link>
                <CommentsPreview comments={this.state.post.comments} />
                <div className="posted-at">2 DAYS AGO </div>
            </section>
            <div className="new-comment">
                <input onChange={this.onWriteComment} type="text" name="new-comment-input" placeholder="Add a comment..."></input>
                <button className="btn-new-comment" onClick={this.onAddComment}>Post</button>
            </div>
        </div>
        )
    }
}


