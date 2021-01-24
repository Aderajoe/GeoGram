import { dataServices } from "../services/postService.js";
import { UserPostList } from "../cmps/UserPostList.jsx"
import { AppHeader } from './cmps/AppHeader.jsx'
import { FollowedBy } from '../cmps/FollowedBy.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { Link } = ReactRouterDOM;


export class ProfileView extends React.Component {
    state = {
        page: "view-profile",
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

        return (<div className="view-profile-page">
            <AppHeader page={this.state.page} />
            <section className="user-view">
                <div className="card">
                    <img className="user-img" src={this.state.user.imgUrls[0]} alt="Image not available" width="500"></img>
                    <div className="main">
                        <div className="card-header">
                            <div>{this.state.user.fullName}</div>
                            <div className="options"></div>
                        </div>
                        <div className="meta-data">
                            <div> <span className="bold">{this.state.posts.length}</span> posts</div>
                            <div> <span className="bold">{this.state.user.followedBy.length}</span> followers</div>
                            <div> <span className="bold">{this.state.user.following.length}</span> following</div>
                        </div>
                        <div className="details">
                            <div className="name">{this.state.user.fullName}</div>
                            <div className="location">{this.state.user.city}</div>
                        </div>

                        <FollowedBy user={this.state.page} />
                        <div className="footer"></div>
                    </div>
                    {/* <button onClick={this.onBack}>go back</button> */}
                </div>
                <UserPostList posts={this.state.posts} />
            </section>
        </div>)
    }
}
