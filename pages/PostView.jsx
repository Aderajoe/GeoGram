
import { dataServices } from "../services/postService.js";
import { CommentList } from "../cmps/CommentsList.jsx";

const { Link } = ReactRouterDOM;

export class PostView extends React.Component {
    state = {
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

            <img src={this.state.post.imgUrl} className="post-img" alt="Image not available" width="500"></img>
            <section className="post-details" >
                <div className="user-details">
                    <img className="img-user-preview" src={this.state.post.by.imgUrl} alt="Image not available"></img>
                    <Link className=" link" to={`/post/user/${this.state.post.by._id}`}> {this.state.post.by.fullName}</Link>
                </div>
                <Link className="user-link" to={`user/${this.state.post.by._id}`}> click to watch profile</Link>
                <CommentList post={this.state.post}/>
                <div> likes and stuf</div>
                <div className="new-comment"> <input placeholder="Add a comment"></input></div>
            </section>
        </div>)
    }
}
