import { PostList } from "../cmps/PostList.jsx"
import { UserList } from "../cmps/UserList.jsx"



import { dataServices } from "../services/postService.js"
export class Home extends React.Component {

    state = {
        users: [],
        posts: []
    }
    //  hhh = window.onLoad = onLoadData()
    componentDidMount() {
        this.onLoadData()
    }
    printStateToConsole = () => {
        console.log(this.state)
    }
    loadPostListToPage = () => {
        return <PostList posts={this.state} />
    }

    onLoadData = () => {
        var dataCopy = dataServices.loadData()
        this.setState({ users: dataCopy.users })
        this.setState({ posts: dataCopy.posts })


    }
    render() {
        if (this.state.user === null) return <div>Loading.. home</div>;

        return <section onLoad={onloadeddata} className="home-main-container">
            {/* <button className="hello" onClick={this.onLoadData}>post list hi </button>
            <button className="hello" onClick={this.printStateToConsole}>print state</button>
        <button className="hello" onClick={this.loadPostListToPage}>load post list</button> */}
            {/* <div>{this.loadPostListToPage}</div> */}
            <PostList posts={this.state.posts} />
            <UserList users={this.state.users} />




            {/* <PostList posts={this.state.dataCheck.posts} /> */}


        </section>

    }
}

