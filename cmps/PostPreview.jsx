import { CommentsPreview } from "../cmps/CommentsPreview.jsx"
import { UserPreview } from "../cmps/userPreview.jsx"
import { dataServices } from "../services/postService.js"

const { Link } = ReactRouterDOM;

export class PostPreview extends React.Component {

    // export function PostPreview({ post, userLogged }) {

    state = {
        // users: this.props.users,
        post: this.props.post,
        userLogged: this.props.userLogged,
        isLiked: "new-heart.svg"
    }
    componentDidMount() {
        this.getLike()
        console.log(this.state)
    }
    getElapsedTime() {
        console.log(post.at + "posted at")
        console.log(Date.now() + "the time now")
        var elapsedTime = Date.now() - post.at
        console.log(elapsedTime)
        elapsedTime = elapsedTime / 1000
        console.log(elapsedTime)
    }
    logInUser() {
        // const { userId } = this.props.match.params;
        // const { userId } 
        var userId = 5
        var user
        var userCheck = []
        //    var userLogged= dataServices.getUserById(userId)
        dataServices.getUserById(userId).then(user = userCheck)
        // debugger
        // console.log(userCheck)
    }

    isLiked = (like) => {
        if (like._id === this.state.userLogged._id) {
            // console.log("this works")
            return true
        } else {
            // console.log("no like")

            return false
        }
    }
    addLike = () => {
        console.log("i dont like this")
        debugger

        if (this.state.isLiked === "new-heart.svg") {
            var postCopy = this.state.post
            var userDetails = {
                _id: 107,
                imgUrl: "https://images.pexels.com/photos/3049285/pexels-photo-3049285.jpeg?cs=srgb&dl=pexels-jack-redgate-3049285.jpg&fm=jpg",
                fullName: "Aderajoe Tsegay"
            }

            postCopy.likes.push(userDetails)
            this.setState({ post: postCopy })
            this.setState({ isLiked: "red-heart.svg" })

            console.log("i dont like this")
        } else {
            var postCopy = this.state.post

            var likes = postCopy.likes.map(like => {
                if (like._id === 107) {
                    return false
                } else {
                    return like
                }
            });
            postCopy.likes = likes.filter(like => like)

            console.log(likes)
            this.setState({ post: postCopy })

            this.setState({ isLiked: "new-heart.svg" })

            console.log("i like this")

        }
    }
    getLike = () => {
        if (this.state.post.likes.length > 0) {
            // console.log(this.state.userLogged._id)
            var isLike = this.state.post.likes.filter(this.isLiked)
            // console.log(isLike)
            if (isLike.length > 0) {
                return this.setState({ isLiked: "red-heart.svg" })
            }
        }
        // else return(
        //       this.setState({ isLiked: "new-heart.svg" }) )
        //     if(this.state.userLogged._id===this.state.post.likes[0]._id){
        //         this.setState({ isLiked: "red-heart.svg" })
        //         console.log("this works")
        //     }else{
        //         this.setState({ isLiked: "new-heart.svg" })
        //     }
    }


    // logInUser()
    render() {


        return (<div className="post-preview-main-container">
            <UserPreview user={this.state.post.by} />
            <Link className="post-view" to={`/post/${this.state.post._id}`}>
                <img src={this.state.post.imgUrl} alt="Image not available" width="628" height="753"></img>
            </Link>
            <section className="post-preview-details">
                <div className="post-options">
                    <button className="btn-post-options-like" onClick={this.addLike}>

                        <img className="post-options-like" src={`/assets/imgs/${this.state.isLiked}`} width="25" height="25"></img>
                    </button>
                    <img className="post-options-comments" src="assets\imgs\comments.svg" width="25" height="25"></img>
                    <img className="post-options-save" src="assets\imgs\save.svg" width="25" height="25"></img>
                </div>
                <div className="bold"> {this.state.post.likes.length} likes</div>
                <div>  <Link className="post-view link" to={`/post/user/${this.state.post.by._id}`}>
                    <span className="user-name bold">  {this.state.post.by.fullName}</span></Link>  {this.state.post.txt}</div>
                <Link className="post-preview-more-comments link" to={`/post/${this.state.post._id}`}> View all {this.state.post.comments.length} comments</Link>
                <CommentsPreview comments={this.state.post.comments} />
                <div className="post-preview-at">2 DAYS AGO </div>
                {/* <button onClick={this.getLike}> get time</button> */}
            </section>
            <div className="new-comment">
                <input type="text" name="new-comment-input" placeholder="Add a comment..."></input>
                <button className="btn-new-comment">Post</button>
            </div>
        </div>
        )
    }
}


