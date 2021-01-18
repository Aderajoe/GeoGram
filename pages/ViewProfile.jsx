import { dataServices } from "../services/postService.js";
import { UserPostList } from "../cmps/UserPostList.jsx"


const { Link } = ReactRouterDOM;


export class ProfileView extends React.Component {
    state = {
        user: null,
        posts: null
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        let { userId } = this.props.match.params;
        dataServices.getUserById(userId).then(user => {
            this.setState({ user });
        });
        dataServices.getPostsByUserId(userId).then(posts => {
            this.setState({ posts });
        })
    }

    onBack = () => {
        this.props.history.goBack()

    }
    render() {
        if (!this.state.user) return <div className="hello">Loading profile..</div>;
        if (!this.state.posts) return <div className="hello">Loading profile..</div>;

        return (<div>
            <section className="user-view hello">
                <img src={this.state.user.imgUrls[0]} alt="Image not available" width="500"></img>
                <div> user details
                    <div>
                        {this.state.user.fullName}
                    </div>
                    <div> has {this.state.user.followedBy.length} followers </div>
                </div>
                <button onClick={this.onBack}>go back</button>
            </section>
            <UserPostList posts={this.state.posts} />

        </div>)
    }
}
