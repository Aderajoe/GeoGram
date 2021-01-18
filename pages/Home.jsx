import { PostList } from "../cmps/PostList.jsx"
import { UserList } from "../cmps/UserList.jsx"
import { dataServices } from "../services/postService.js"

export class Home extends React.Component {

    state = {
        users: [],
        posts: [],
        userLogged: {}
    }

    componentDidMount() {
        this.onLoadData()
    }

    onLoadData = () => {
        var dataCopy = dataServices.loadData()
        this.setState({ users: dataCopy.users })
        this.setState({ posts: dataCopy.posts })
        this.setState({ userLogged: dataCopy.userLogged })
    }

    render() {
        if (!this.state.users) return <div>Loading..</div>;

        return <section className="home-main-container">
            <PostList posts={this.state.posts} userLogged={this.state.userLogged} />
            {/* <UserList users={this.state.users} /> */}
        </section>

    }
}

