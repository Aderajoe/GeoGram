import { dataServices } from "../services/postService.js";
import { UserPostList } from "../cmps/UserPostList.jsx"


const { Link } = ReactRouterDOM;


export class ProfileView extends React.Component {
    state = {
        user: null,
        posts:null
    };

    componentDidMount() {
        this.loadUser();
        


    }

    loadUser() {
        
        const { userId } = this.props.match.params;
        // var dataCheck = dataServices.loadData()
        // var postCheck = dataCheck.posts[0]
        //     this.setState({ post:postCheck });

          dataServices.getUserById(userId).then(user => {
            this.setState({ user: user });

            
        });
        dataServices.getPostsByUserId(userId).then(posts => {
            this.setState({ posts });})
    
    }
    checkState=()=>{
        console.log(this.state)
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
        if (!this.state.user ) return <div className="hello">Loading.. profile</div>;
        if (!this.state.posts ) return <div className="hello">Loading.. profile</div>;


        return (<div>
            <section className="user-view hello">
        <img src={this.state.user.imgUrls[0]} alt="Image not available" width="500" height="600"></img>
        {/* <Link className="post-view" to={`/${user._id}`}> click to see user</Link> */}

                <div> user details 
                    <div>
                        {this.state.user.fullName}
                        </div>
                        <div>
                            have {this.state.user.followedBy.length} followers
                        </div>
                </div>
                
                <div> coments view</div>
                <div> likea and stuf</div>
                <div> add comment</div>
                <button onClick={this.onBack}>go back</button>
                <button onClick={this.checkState}>checkd data</button>



            </section>
            <UserPostList posts={[this.state.posts]} />

        </div>)
    }
}
