import { dataServices } from "../services/postService.js";
import { ProfileView } from './ViewProfile.jsx'

const { Link } = ReactRouterDOM;

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class PostView extends React.Component {
    state = {
        post: null
    };

    componentDidMount() {
        this.loadPost();
    }

    loadPost() {

        const { postId } = this.props.match.params;
        // var dataCheck = dataServices.loadData()
        // var postCheck = dataCheck.posts[0]
        //     this.setState({ post:postCheck });






        dataServices.getPostById(postId).then(post => {
            this.setState({ post });
        });

    }
    // onDelete = () => {
    //     mailService.deleteMail(this.state.mail.id)
    //     this.onBack()
    // }

    onBack = () => {
        this.props.history.goBack()

    }
    render() {
        // if (!this.state.mail) return <div>Loading..</div>;
        if (!this.state.post) return <div className="hello">Loading.. post</div>;


        return (<div>
            <section className="post-view">
                <img src={this.state.post.imgUrl} alt="Image not available" width="500" height="600"></img>
                {/* <Route path="/:userId" component={ProfileView} /> */}

                <div> user details</div>
                <Link className="post-view" to={`user/${this.state.post.by._id}`}> click to see user</Link>
                <div> coments view</div>
                <div> likea and stuf</div>
                <div> add comment</div>


            </section>
        </div>)
    }
}
