import { dataServices } from "../services/postService.js";

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

        return (<div className="post-view-main-container">

            <img src={this.state.post.imgUrl} alt="Image not available" width="500"></img>
            <section className="post-details" >
                <div className="post-details-user-details">
                    <img className="img-user-preview" src={this.state.post.by.imgUrl} alt="Image not available"></img>
                    <Link className=" link" to={`/post/user/${this.state.post.by._id}`}> {this.state.post.by.fullName}</Link>
                </div>
                <Link className="post-view" to={`user/${this.state.post.by._id}`}> click to watch profile</Link>
                <div> comments view</div>
                <div> likes and stuf</div>
                <div> add comment</div>
            </section>
        </div>)
    }
}
