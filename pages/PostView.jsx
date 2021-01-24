import { AppHeader } from '../cmps/AppHeader.jsx'

import { dataServices } from "../services/postService.js";
import { CommentList } from "../cmps/CommentsList.jsx";

const { Link } = ReactRouterDOM;

export class PostView extends React.Component {
    state = {
        page: "post-view",
        post: null
    };

    componentDidMount() {
        this.loadPost();
    }

    loadPost() {
        let { postId } = this.props.match.params;
        dataServices.getPostById(postId).then(post => {
            this.setState({ post });
        });
    }

    onBack = () => {
        this.props.history.goBack()
    }

    render() {
        if (!this.state.post) return <div className="hello">Loading.. post</div>;

        return (<div className="post-view-page">
            <div className="post-view">

            <AppHeader page={this.state.page} />
            <img src={this.state.post.imgUrl} className="post-img" alt="Image not available" width="500"></img>
            <section className="post-details" >
                {/* <Link className="user-link" to={`user/${this.state.post.by._id}`}> click to watch profile</Link> */}
                <div className="user-details">
                    <img className="img-user" src={this.state.post.by.imgUrl} alt="Image not available"></img>
                    <Link className=" link" to={`/post/user/${this.state.post.by._id}`}> {this.state.post.by.fullName}</Link>
                </div>
                <CommentList post={this.state.post} />
                <div className="options">
                    <div className="btn">
                        <img className="like" src={`/assets/imgs/heart.svg`} ></img>
                        <img className="comment" src="assets\imgs\comments.svg"></img>
                        <div className="space"></div>
                        <img className="save" src="assets\imgs\save.svg"></img>
                    </div>
                    <div className="bold"> {this.state.post.likes.length} likes</div>
                    <div className="posted-at">2 DAYS AGO</div>
                </div>
                <div className="new-comment"> <input type="text" name="new-comment" placeholder="Add a comment"></input>
                    <button className="btn-new-comment">Post</button></div>
            </section>
            </div>
        </div>)
    }
}
